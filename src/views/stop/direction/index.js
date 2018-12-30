import { h } from "preact";

import Icon from "icon";
import DirectionTimes from "./direction-times";

import getDirectionDestination from "tranvia-api/get-direction-destination";

import style from "./styles.scss";

export default function Direction({ route, direction, stopData }) {
  let destination = getDirectionDestination(route - 1, direction);

  return (
    <div class={style.directionWrapper}>
      <h4 class={`flex flex-cross-center ${style.directionTitle}`}>
        <Icon name="transfer" color="var(--color-secondary)" size="28" />
        &nbsp;&nbsp;{destination}
      </h4>
      <div class={style.directionInfo}>
        <p class={style.directionDescription}>
          Tranvías dirección {destination}
        </p>
        <div>
          {stopData.map(time => {
            return <DirectionTimes time={time} />;
          })}
        </div>
      </div>
    </div>
  );
}
