import { h, Component } from "preact";
import { connect } from "unistore/preact";

import ContentRouter from "content-router";
import Footer from "footer";

import { actions } from "store";
import { REFRESH_RATE } from "vars";

import style from "./styles.scss";

export default connect(
  ["routes", "isOnline"],
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

      window.addEventListener("online", () => {
        this.props.updateOnlineStatus().then(() => {
          this.fetchData();
        });
      });
      window.addEventListener("offline", () => {
        this.props.updateOnlineStatus().then(() => {
          this.setState({ isFetching: false });
        });
      });
    }

    fetchData() {
      if (this.state.isFetching || !this.props.isOnline) {
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
          this.props.addError("Error al obtener los datos")
          this.setState({ isFetching: false });
        });
    }

    render() {
      return (
        <div class={`${style.wrapper}`}>
          <div class={`flex flex-dc cscroll ${style.innerWrapper}`}>
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
