import { h } from "preact";

import Logo from "./logo";
import SearchBar from "./search-bar";

import style from "./styles.scss";

export default function Header() {
  return (
    <div class={`flex flex-dc ${style.headerWrapper}`}>
      {/* // Logo + back button? */}
      <Logo />

      {/* Search Bar || Stop name */}
      <SearchBar />
    </div>
  );
}
