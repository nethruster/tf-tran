import { h } from "preact";
import { Link } from "react-router-dom";

import Icon from "icon";

import style from "./styles.scss";

export default function Stop({ link, stop }) {
  return (
    <li class={`${style.listingItem}`}>
      <Link to={link} class={`flex flex-cross-center flex-sb ${style.listingItemLink}`}>
          <p class={`truncate ${style.stopTitle}`}>{stop}</p>
          <div class={`flex flex-full-center ${style.listingItemIcon}`}>
            <Icon name="next" color="var(--color-secondary)" size="28" />
          </div>
      </Link>
    </li>
  );
}
