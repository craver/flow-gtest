import React from "react";
import style from './Menu.css';
import { makeStyles } from '@material-ui/core/styles';
import appStyles from './../styles/app.css';
import color from '@material-ui/core/colors/red';
import { Router, Link, Location } from "@reach/router";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div className={appStyles.TestBoxs}>
      <ul className={style.Menu}>
      <Link to="/about/">About</Link>
      <Link to="/users/">Users</Link>
      <li><Link to="/">Home</Link></li>
      <li><a href="/products/product-1.html">Product</a></li>
      <li><a href="/contact.html">Contact</a></li>
      </ul>
     </div>
  );
}
