import { h, Component } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default class SearchBar extends Component {
  render() {
    return (
      <div class="flex flex-main-center">
        <div class={`flex flex-cross-center ${style.searchInputWrapper}`}>
          <Icon name="search" color="var(--color-secondary)" size="22" />
          <input
            type="search"
            class={style.searchInput}
            placeholder="Busca tu estación..."
          />
        </div>
      </div>
    );
  }
}
