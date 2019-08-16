import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from 'decko'

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
        isFetching: false,
        isScrollOutsideHeader: false
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

      document.documentElement.addEventListener("mousewheel", event => {
        if (event.srcElement.getAttribute("id") == "mount-point") {
          this.scrollContainer.scrollTop =
            this.scrollContainer.scrollTop + event.deltaY;
        }
      });
    }

    componentDidMount() {
      let isScrollOutsideHeader = this.checkContainerScrollTop()

      if(isScrollOutsideHeader) {
        this.setState({isScrollOutsideHeader})
      }

      this.scrollContainer.addEventListener('scroll', e => {
        isScrollOutsideHeader = this.checkContainerScrollTop()

        if(isScrollOutsideHeader != this.state.isScrollOutsideHeader) {
          this.setState({isScrollOutsideHeader})
        }
      })      
    }

    checkContainerScrollTop() {
      return this.scrollContainer.scrollTop >= 100
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
          this.props.setFetchEndedSuccessfully(true)
        })
        .catch(err => {
          console.error(err);
          this.setState({ isFetching: false });
          this.props.setFetchEndedSuccessfully(false)
        });
    }

    render() {
      return (
        <div class={`${style.wrapper} come-in`}>
          <div id="scrollContainer" class={`flex flex-dc cscroll ${style.innerWrapper}`} ref={(el) => {this.scrollContainer = el}}>
            <div class={style.contentWrapper}>
              <ContentRouter isScrollOutsideHeader={this.state.isScrollOutsideHeader} />
            </div>
            <Footer isFetchingData={this.state.isFetching} />
          </div>
        </div>
      );
    }
  }
);
