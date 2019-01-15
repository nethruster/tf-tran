import { h, Component } from "preact";
import { connect } from "unistore/preact";

import Logo from "./logo";
import SearchBar from "./search-bar";
import BackButton from "./back-button";
import StopTitle from "./stop-title";
import Loader from "loader";

import style from "./styles.scss";

export default connect([
  "selectedStop",
  "routes",
  "isOnline",
  "fetchEndedSuccessfully"
])(function Header({
  selectedStop,
  routes,
  isOnline,
  fetchEndedSuccessfully,
  isScrollOutsideHeader
}) {
  return (
    <div class={`flex flex-dc ${style.headerWrapper}`}>
      <div
        class={`${style.backgroundHeader} ${
          !isOnline || (isOnline && !fetchEndedSuccessfully)
            ? style.noConnection
            : ""
        }`}
      />
      <div class={`flex flex-dc ${style.headerContent}`}>
        {routes && selectedStop && (
          <BackButton isScrollOutsideHeader={isScrollOutsideHeader} />
        )}
        <Logo />
        {isOnline && fetchEndedSuccessfully && routes == null ? (
          <Loader color="var(--color-primary)" />
        ) : selectedStop ? (
          <StopTitle title={selectedStop} />
        ) : (
          <SearchBar />
        )}
      </div>
    </div>
  );
});
