import React from "react";
import "./navbar.css"

function Navbar () {
    return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-title">Employee Directory</div>
        <br></br>
        <p className="navbar-body">Use the Search box to sort by First/Last Name, Phone or Email.</p>
      </nav>
    </div>
  );

}

export default Navbar;