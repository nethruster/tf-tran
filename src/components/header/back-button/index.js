import { h } from "preact";
import { Link } from "react-router-dom";

import Icon from "icon";

import style from "./styles.scss";

export default function BackButton({isScrollOutsideHeader}) {
  return (
    <Link to="/" class={`flex flex-full-center ${style.backButton} ${isScrollOutsideHeader ? style.alternativeBackButton : ''}`}>
      <Icon name="back" size="26" color="var(--color-bg)" />
    </Link>
  );
}
