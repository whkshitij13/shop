import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/Icon.png";
import useStyles from "./styles.js";
import {Link,useLocation} from "react-router-dom"

import  MenuIcon from "@material-ui/icons/Menu"

function Navbar({totalItems}) {
	const classes = useStyles();
	const location=useLocation();

	return (
		<>
			<AppBar position="sticky" className={classes.appbar} color="inherit" >
				<Toolbar>
				
					<Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
						<img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
						Shopping
					</Typography>
					
					<div className={classes.grow} />
					{location.pathname==="/" &&(
					<div className={classes.button}>
						<Typography  component={Link} to="/login" variant="h6" color="inherit"style={{marginRight:"5px"}}>Login</Typography> 
						<IconButton component={Link} to="/cart"  aria-label="Show cart items" color="inherit">
							<Badge badgeContent={totalItems} color="secondary"></Badge>
							<ShoppingCart />
						</IconButton>
					</div>)}
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Navbar;
