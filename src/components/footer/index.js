import { h, Component } from "preact";
import { bind } from "decko";

import style from "./styles.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.REFRESH_RATE = 10000;

    this.state = {
      refreshCount: this.REFRESH_RATE / 1000
    };
  }

  componentDidMount() {
    this.countRefresh();
  }

  @bind
  countRefresh() {
    setInterval(() => {
      if (this.state.refreshCount <= 0 || this.props.isFetchingData) {
        this.setState({ refreshCount: this.REFRESH_RATE / 1000 });
      } else if (!this.props.isFetchingData) {
        this.setState({ refreshCount: this.state.refreshCount - 1 });
      }
    }, 1000);
  }

  render({ isFetchingData }) {
    return (
      <p class={`flex flex-full-center ${style.footerWrapper}`}>
        <small>
          {this.state.refreshCount <= 0 || isFetchingData
            ? "Refrescando..."
            : `Refrescando en ${this.state.refreshCount}`}
        </small>
        <small class={style.authorInfo}>
          Un proyecto de{" "}
          <a target="_blank" href="https://nethruster.com">
            Nethruster
          </a>
        </small>
      </p>
    );
  }
}
