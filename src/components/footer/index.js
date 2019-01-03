import { h } from "preact";

import RefreshCounter from "./refresh-counter";
import FooterLinks from "./links";

import style from "./styles.scss";

export default function Footer({ isFetchingData }) {
  return (
    <p class={`flex flex-dc ${style.footerWrapper}`}>
      <span class="flex flex-main-center">
        <RefreshCounter isFetchingData={isFetchingData} />
        <FooterLinks />
      </span>
      <small class="text-center">
          Este sitio no está de ningún modo afiliado, autorizado, mantenido o
          promocionado por <a target="_blank" rel="noopener" href="https://metrotenerife.com/">MetroTenerife.</a>
      </small>
    </p>
  );
}
