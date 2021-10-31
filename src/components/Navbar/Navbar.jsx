import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/Icon.png";
import useStyles from "./styles.js";

function Navbar({totalItems}) {
	const classes = useStyles();

	return (
		<>
			<AppBar position="fixed" classname={classes.appbar} color="inherit">
				<Toolbar>
					<Typography variant="h5" className={classes.title} color="inherit">
						<img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
						Commerce.js
					</Typography>
					<div className={classes.grow} />
					<div className={classes.button}>
						<IconButton aria-label="Show cart items" color="inherit">
							<Badge badgeContent={totalItems} color="secondary"></Badge>
							<ShoppingCart />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Navbar;
