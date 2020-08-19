import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <Link to="/">Tasks</Link>
      <Link to="/add">Add Tasks</Link>
    </div>
  );
}

export default Footer;
