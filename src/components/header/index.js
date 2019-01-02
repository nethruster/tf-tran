import { h, Component } from "preact";
import { connect } from "unistore/preact";

import Logo from "./logo";
import SearchBar from "./search-bar";
import BackButton from "./back-button";
import StopTitle from "./stop-title";
import Loader from "loader";

import style from "./styles.scss";

export default connect(["selectedStop", "routes"])(function Header({
  selectedStop,
  routes
}) {
  return (
    <div class={`flex flex-dc ${style.headerWrapper}`}>
      {routes && selectedStop && <BackButton />}
      <Logo />
      {routes == null ? (
        <Loader color="var(--color-primary)" />
      ) : selectedStop ? (
        <StopTitle title={selectedStop} />
      ) : (
        <SearchBar />
      )}
    </div>
  );
});
