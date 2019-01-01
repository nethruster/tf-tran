import { h } from "preact";

import style from "./styles.scss";

export default function FooterLinks() {
  return (
    <small class={style.authorInfo}>
      Un proyecto de&nbsp;
      <a target="_blank" href="https://nethruster.com">
        Nethruster
      </a>
    </small>
  );
}
