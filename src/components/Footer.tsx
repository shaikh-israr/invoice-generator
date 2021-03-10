import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "222%",
    },
  },
}));

export default function Footer() {
  const classer = useStyles();
  return (
    <div className="row mb-5">
      <div className={classer.root}>
        <div className="rights">
          © 2020 Enalo Technologies Pvt Ltd. All Rights Reserved.
        </div>
        <div className="privacy-terms">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <span>|</span>
          <a href="/#">Terms &amp; Conditions</a>
        </div>
        <br />

        <div
          className="mt-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              backgroundColor: "#3B5998",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              marginLeft: "4px",
            }}
          >
            <a href="https://facebook.com/enalo.in/">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{
                  fontSize: "17px",
                  color: "white",
                  margin: "7",
                  marginLeft: "10px",
                  marginTop: "8px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              backgroundColor: "#55ACEE",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              marginLeft: "4px",
            }}
          >
            <a href="https://twitter.com/enalo_in">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  fontSize: "17px",
                  color: "white",
                  margin: "7",
                  marginLeft: "8px",
                  marginTop: "8px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              backgroundColor: "#007BB5",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              marginLeft: "4px",
            }}
          >
            <a href="https://www.linkedin.com/company/enalo">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{
                  fontSize: "17px",
                  color: "white",
                  margin: "7",
                  marginLeft: "8px",
                  marginTop: "8px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              marginLeft: "4px",
            }}
          >
            <a href="https://www.instagram.com/enalo_in">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "30px", color: "#FF0000" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
