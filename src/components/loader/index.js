import { h } from "preact";

import style from "./styles.scss";

export default function Loader({ color = "var(--color-secondary)" }) {
  return <div class={style.spinner} style={{ backgroundColor: color }} />;
}
