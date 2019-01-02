import { h } from "preact";

import RefreshCounter from "./refresh-counter";
import FooterLinks from "./links";

import style from "./styles.scss";

export default function Footer({ isFetchingData }) {
  return (
    <p class={`flex flex-dc ${style.footerWrapper}`}>
      <span class="flex">
        <RefreshCounter isFetchingData={isFetchingData} />
        <FooterLinks />
      </span>
      <small class="text-center">Este sitio no está de ningún modo afiliado, autorizado, mantenido o promocionado por Titsa. <br />Esto es un proyecto no oficial e independiente.</small>
    </p>
  );
}
