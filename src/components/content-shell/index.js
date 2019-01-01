import { h, Component } from "preact";
import { connect } from "unistore/preact";

import ContentRouter from "content-router";
import Footer from "footer";

import { actions } from "store";

import style from "./styles.scss";

export default connect(
  "routes",
  actions
)(
  class ContentShell extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isFetching: false
      };
    }

    componentWillMount() {
      if (this.props.routes == null) {
        this.fetchData();
      }

      setInterval(() => {
        this.fetchData();
      }, 10000);
    }

    fetchData() {
      if (this.state.isFetching) {
        return;
      }

      this.setState({ isFetching: true });

      this.props
        .updateRoutes()
        .then(() => {
          this.setState({ isFetching: false });
        })
        .catch(err => {
          console.error(err);
          this.setState({ isFetching: false });
        });
    }

    render() {
      return (
        <div class={`flex flex-dc ${style.wrapper}`}>
          <div class={style.contentWrapper}>
            <div class={style.backgroundHeader} />
            <ContentRouter />
          </div>
          <Footer isFetchingData={this.state.isFetching} />
        </div>
      );
    }
  }
);
