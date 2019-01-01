import { h } from "preact";
import { Link } from "react-router-dom";
import Ink from "react-ink";

import Icon from "icon";

import style from "./styles.scss";

export default function BackButton() {
  return (
    <Link to="/" class={`flex flex-full-center ${style.backButton}`}>
      <Ink />
      <Icon name="back" size="26" color="var(--color-bg)" />
    </Link>
  );
}
