import React from "react";

function Navbar () {
    return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand">Employee Directory</h1>
        <p className="navbar-brand">Click on carrots to filter or use the search box to narrow down your search.</p>
      </nav>
    </div>
  );

}

export default Navbar;