import { h } from "preact";

import Icon from "icon";
import Chip from "chip";

import getRemainingMinutesString from "tranvia-api/get-remaining-time-string";

import style from "./styles.scss";

export default function DirectionTimes({ time }) {
  return (
    <div class={`flex flex-cross-center flex-sb ${style.stopTime}`}>
      <div class="flex flex-cross-center">
        <Icon name="clock" color="var(--color-bg)" size="24" />
        &nbsp;&nbsp;
        {getRemainingMinutesString(time.remainingMinutes)}
      </div>
      <Chip
        text="Próximo"
        textColor="var(--color-green)"
        bgColor="var(--color-tertiary)"
      />
    </div>
  );
}
