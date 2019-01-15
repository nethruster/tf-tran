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
        timePassedSince: ""
      };
    }

    componentDidMount() {
      if (this.state.timePassedSince == "") {
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
        this.setState({ timePassedSince: `hace menos de un minuto` });
        return;
      }

      if (minutes >= 30) {
        this.setState({ timePassedSince: `hace más de media hora` });
        return;
      }

      this.updateTimePassed(minutes);
    }

    @bind
    updateTimePassed(minutes) {
      this.setState({
        timePassedSince: `hace ${getRemainingMinutesString(
          minutes
        ).toLowerCase()}`
      });
    }

    render() {
      return (
        <div class={style.warningWrapper}>
          <p>
            <small class="flex flex-full-center">
              {this.props.global ? (
                <Icon name="wifi-off" color="#DD2C00" size="16" />
              ) : (
                <Icon name="error" color="#DD2C00" size="16" />
              )}
              &nbsp;&nbsp;
              <span>
                {this.props.global
                  ? "Se ha perdido la conexión."
                  : "No se ha podido actualizar la información."}
              </span>
              &nbsp;
              <span>Última actualización: {this.state.timePassedSince}</span>
            </small>
          </p>
        </div>
      );
    }
  }
);
