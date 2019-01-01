import { h } from "preact";

import RefreshCounter from "./refresh-counter";
import FooterLinks from "./links";

import style from "./styles.scss";

export default function Footer({ isFetchingData }) {
  return (
    <p class={`flex flex-full-center ${style.footerWrapper}`}>
      <RefreshCounter isFetchingData={isFetchingData} />
      <FooterLinks />
    </p>
  );
}
