import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function NoResults() {
  return (
    <div class="flex flex-dc flex-full-center">
      <div class={`flex flex-full-center ${style.iconContainer}`}>
        <Icon name="sad-face" size="94" color="var(--color-bg)" />
      </div>
      <p class={`text-center ${style.description}`}>
        No hemos encontrado paradas coincidentes con tu búsqueda.
      </p>
    </div>
  );
}
