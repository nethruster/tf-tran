import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import Icon from "icon";
import { actions } from "store";

import style from "./styles.scss";

export default connect(
  "searchKey",
  actions
)(
  class SearchBar extends Component {
    componentWillUnmount() {
      if (this.searchInput) {
        this.searchInput.value = "";
        this.props.setSearchKey("");
      }
    }

    @bind
    handleInputValueChange(event) {
      this.props.setSearchKey(event.target.value);
    }

    render() {
      return (
        <div class="flex flex-main-center">
          <div class={`flex flex-cross-center ${style.searchInputWrapper}`}>
            <Icon name="search" color="var(--color-secondary)" size="22" />
            <input
              ref={el => {
                this.searchInput = el;
              }}
              type="search"
              class={style.searchInput}
              placeholder="Busca tu estación..."
              onInput={this.handleInputValueChange}
            />
          </div>
        </div>
      );
    }
  }
);
