import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function StopTitle({ title }) {
  return (
    <h1 class={`flex flex-full-center fade-in ${style.stopTitle}`}>
      <Icon name="map-marker" size="24" color="var(--color-primary)" />
      {title}
    </h1>
  );
}
