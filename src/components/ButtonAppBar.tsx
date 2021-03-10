import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../images/logo.svg";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        width: "800px",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,
      fontSize: "30px",
    },
    mob: {
      width: "100%",
      height: "14vh",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.mob}>
        <Toolbar>
          <a href="/index.html">
            <img
              src={logo}
              style={{ width: "200px", marginLeft: "266px", marginTop: "13px" }}
              alt=""
            />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
