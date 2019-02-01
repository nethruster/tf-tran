import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function NoStops() {
  return (
    <div class="flex flex-dc flex-full-center">
      <div class={`flex flex-full-center ${style.iconContainer}`}>
        <Icon name="power-sleep" size="94" color="var(--color-bg)" />
      </div>
      <p class={`text-center ${style.description}`}>
        No hay tranvías disponibles en este momento.
      </p>
    </div>
  );
}
