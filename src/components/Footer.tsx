import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="row mb-5">
      <div className="col-sm-12 text-center">
        <div className="rights">
          © 2020 Enalo Technologies Pvt Ltd. All Rights Reserved.
        </div>
        <div className="privacy-terms">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <span>|</span>
          <a href="/#">Terms &amp; Conditions</a>
        </div>

        <div className="mt-3">
          <a href="https://facebook.com/enalo.in/">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ fontSize: "30px" }}
            />
          </a>
          <a href="https://twitter.com/enalo_in">
            {" "}
            <FontAwesomeIcon
              icon={faTwitterSquare}
              style={{ fontSize: "30px" }}
            />{" "}
          </a>
          <a href="https://www.linkedin.com/company/enalo">
            {" "}
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "30px" }} />
          </a>

          <a href="https://www.instagram.com/enalo_in">
            {" "}
            <FontAwesomeIcon
              icon={faInstagramSquare}
              style={{ fontSize: "30px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
