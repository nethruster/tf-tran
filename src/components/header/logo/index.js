import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function HeaderLogo() {
  return (
    <div class="come-in" style="animation-delay: .4s;">
      <h1 class={`flex flex-full-center ${style.logoTitle}`}>
        <img src="/assets/logo.svg" alt="Próximo Tranvia"></img>
      </h1>
    </div>
  );
}
