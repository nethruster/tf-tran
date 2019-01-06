import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import { actions } from "store";
import { getFilteredRoutesArray, checkSearchResults } from "utils";

import style from "./styles.scss";

export default connect(
  ["routes", "search"],
  actions
)(
  class SearchInput extends Component {
    @bind
    handleInputValueChange(event) {
      let searchKey = event.target.value.trim();
      let filteredRoutes = getFilteredRoutesArray(this.props.routes, searchKey);
      let searchState = searchKey !== "";
      let hasResults = checkSearchResults(filteredRoutes);

      this.props.setSearchState(searchState, filteredRoutes, hasResults);
    }

    render({ id }) {
      return (
        <input
          ref={el => {
            this.searchInput = el;
          }}
          id={id}
          type="search"
          class={style.searchInput}
          placeholder="Busca tu estación..."
          aria-label="Buscar estación"
          disabled={this.props.routes === null}
          onInput={this.handleInputValueChange}
        />
      );
    }
  }
);
