import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

// Notice me file-loader (●´ω｀●)
import "../../../assets/img/logo.svg";

export default function HeaderLogo() {
  return (
    <div class="come-in" style="animation-delay: .4s;">
      <h1 class={`flex flex-full-center ${style.logoTitle}`}>
        <img src="/assets/img/logo.svg?v=19012019" alt="Próximo Tranvia"></img>
      </h1>
    </div>
  );
}
