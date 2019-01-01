import { h, Component } from 'preact'
import { connect } from "unistore/preact";
import { bind } from "decko";

import { actions } from "store";

import style from "./styles.scss";


export default connect(
  "searchKey",
  actions
)(class SearchInput extends Component {
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
      <input
        ref={el => {
          this.searchInput = el;
        }}
        type="search"
        class={style.searchInput}
        placeholder="Busca tu estación..."
        onInput={this.handleInputValueChange}
      />
    )
  }
})
