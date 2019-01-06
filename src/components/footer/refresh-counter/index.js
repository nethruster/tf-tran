import { h, Component } from "preact";
import { bind } from "decko";
import { connect } from "unistore/preact";

import { actions } from "store";
import { REFRESH_RATE } from "vars";

import style from "./styles.scss";

export default connect(
  "isOnline",
  actions
)(
  class RefreshCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        refreshCount: REFRESH_RATE / 1000
      };
    }

    componentDidMount() {
      this.countRefresh();
    }

    @bind
    countRefresh() {
      setInterval(() => {
        if (this.state.refreshCount <= 0 || this.props.isFetchingData) {
          this.setState({ refreshCount: REFRESH_RATE / 1000 });
        } else if (!this.props.isFetchingData) {
          this.setState({ refreshCount: this.state.refreshCount - 1 });
        }
      }, 1000);
    }

    render({ isFetchingData, isOnline }) {
      return (
        <small class={style.refreshCounter}>
          {isOnline
            ? this.state.refreshCount <= 0 || isFetchingData
              ? "Refrescando..."
              : `Refrescando en ${this.state.refreshCount}`
            : "Sin conexión"}
        </small>
      );
    }
  }
);
