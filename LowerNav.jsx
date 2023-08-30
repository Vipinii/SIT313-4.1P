import React from "react";

function LowerNav() {
  return (
    <nav className="navbar bg-grey" style={{ marginBottom: "10px" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white font-weight-bold" style={{ fontSize: "20px", fontWeight: "bold" }}>SIGN UP FOR OUR DAILY INSIDER</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Enter your e-mail" aria-label="Search" style={{ width: '1000px', backgroundColor: "white", color: "black" }} />
          <button className="btn btn-success text-white" type="submit" style={{ backgroundColor: "red", border: "none" }}>Subscribe</button>
        </form>
      </div>
    </nav>
  );
}

export default LowerNav;
