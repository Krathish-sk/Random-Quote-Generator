import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="www.google.com" />
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            style={{ color: "#e7eaee" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Links;
