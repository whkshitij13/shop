import React from 'react'
import {Container, Typography , Button ,Grid} from '@material-ui/core';

import useStyles from "./styles";
import CartItem from "./CartItem/CartItem"


const Cart = ({cart}) => {
    const classes = useStyles();
    const EmptyCart=()=>(
        <Typography variant="subtitle1">You have no Items in cart</Typography>
    )
    const FilledCart= () => (
        <>
        <Grid container spacing={3}>
        {cart.line_items.map((item)=>(
          <Grid item xs={12} sm={3} key={item.id}>
               <div><CartItem item={item}/>
               </div>
          </Grid>  
         
        ))}
        </Grid>
        <div  >
            <Typography variant="h4">Subtotal={cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Button</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
            
        </div>
        </>
    )
    if(!cart.line_items) return "Loading...";
    return (
        <div >
            <Container className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
                {!cart.line_items.length ?<EmptyCart/>:<FilledCart/>}
            </Container>
        </div>
    )
}

export default Cart
