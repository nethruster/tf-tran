import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import { actions } from "store";
import getRemainingMinutesString from "tranvia-api/get-remaining-time-string";

import Icon from "icon";

import style from "./styles.scss";

export default connect(
  "lastUpdated",
  actions
)(
  class LostConnection extends Component {
    constructor(props) {
      super(props);

      this.state = {
        getTimePassedSince: ""
      };
    }

    componentDidMount() {
      if (this.state.getTimePassedSince == "") {
        this.getTimePassedSince();
      }
      setInterval(() => {
        this.getTimePassedSince();
      }, 10000);
    }

    getTimePassedSince() {
      let time = this.props.lastUpdated;
      let seconds = Math.floor((Date.now() - time) / 1000);
      let minutes = Math.floor(seconds / 60);

      if (seconds <= 60) {
        this.setState({ getTimePassedSince: `hace menos de un minuto` });
        return;
      }

      if (minutes >= 30) {
        this.setState({ getTimePassedSince: `hace más de media hora` });
        return;
      }

      this.updateTimePassed(minutes);
    }

    @bind
    updateTimePassed(minutes) {
      this.setState({
        getTimePassedSince: `hace ${getRemainingMinutesString(
          minutes
        ).toLowerCase()}`
      });
    }

    render() {
      return (
        <div class={style.warningWrapper}>
          <p>
            <small class="flex flex-full-center">
              <Icon name="wifi-off" color="#DD2C00" size="16" />
              &nbsp;&nbsp;<span>Se ha perdido la conexión.</span>&nbsp;
              <span>Última actualización: {this.state.getTimePassedSince}</span>
            </small>
          </p>
        </div>
      );
    }
  }
);
