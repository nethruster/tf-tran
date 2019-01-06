import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function NoResults() {
  return (
    <div class="flex flex-dc flex-full-center">
      <div class={`flex flex-full-center ${style.iconContainer}`}>
        <Icon name="wifi-off" size="94" color="var(--color-bg)" />
      </div>
      <p class={`text-center ${style.description}`}>Sin conexión a internet.</p>
    </div>
  );
}
