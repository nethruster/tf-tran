import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

import SearchInput from './search-input'

export default function SearchBar () {
      return (
        <div class="flex flex-main-center">
          <div class={`flex flex-cross-center ${style.searchInputWrapper}`}>
            <Icon name="search" color="var(--color-secondary)" size="22" />
            <SearchInput />
          </div>
        </div>
      );
}
    
