import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Googlebooks Search
      </a>
      <a className="navbar-brand" href="/books">
        Saved Items
      </a>
    </nav>
  );
}

export default Nav;
