import { h } from "preact";

import style from "./styles.scss";

export default function Chip({ text, textColor, bgColor }) {
  return (
    <span
      chip
      class={`flex flex-full-center ${style.chip}`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </span>
  );
}
