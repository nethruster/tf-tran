import { h, Component } from "preact";
import { bind } from "decko";
import { connect } from "unistore/preact";

import Direction from "./direction";
import Loader from "loader";

import { actions } from "store";

import style from "./styles.scss";

export default connect(
  "routes",
  actions
)(
  class Stop extends Component {
    constructor(props) {
      super(props);

      this.routeName = this.props.match.params.route;
      this.stop = this.props.match.params.stop;
      this.stopData = [];
    }

    componentWillMount() {
      this.props.setCurrentStop(this.stop);
    }

    componentWillUnmount() {
      this.props.resetCurrentStop();
    }

    @bind
    renderRouteInfo() {
      this.stopData = this.props.routes[Number(this.routeName) - 1].stops[
        this.stop
      ];

      return this.stopData.map((stop, index) => {
        if (this.stopData[index].length > 0) {
          return (
            <Direction
              route={this.routeName}
              direction={index}
              stopData={stop}
            />
          );
        }
      });
    }

    render({ routes }) {
      return (
        <div class={style.stopWrapper}>
          {routes === null ? (
            <Loader />
          ) : (
            <div
              class={`flex flex-cross-center flex-dc ${
                style.stopInfoContainer
              }`}
              data-line={this.routeName}
            >
              {this.renderRouteInfo()}
            </div>
          )}
        </div>
      );
    }
  }
);
