import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

import SearchInput from "./search-input";

export default function SearchBar() {
  let inputId = "search-input";
  return (
    <div class="flex flex-main-center fade-in">
      <div class={`flex flex-cross-center ${style.searchInputWrapper}`}>
        <label class="flex flex-full-center" for={inputId}>
          <Icon name="search" color="var(--color-secondary)" size="22" />
        </label>
        <SearchInput id={inputId} />
      </div>
    </div>
  );
}
