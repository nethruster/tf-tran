import { h, Component } from "preact";
import { connect } from "unistore/preact";

import ContentRouter from "content-router";
import Footer from "footer";

import { actions } from "store";
import { REFRESH_RATE } from "vars";

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
      }, REFRESH_RATE);

      window.addEventListener('online', this.props.updateOnlineStatus)
      window.addEventListener('offline', this.props.updateOnlineStatus)
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
        <div class={`${style.wrapper}`}>
        <div  class={`flex flex-dc cscroll ${style.innerWrapper}`}>
          <div class={style.contentWrapper}>
            <ContentRouter />
          </div>
          <Footer isFetchingData={this.state.isFetching} />
          </div>
        </div>
      );
    }
  }
);
