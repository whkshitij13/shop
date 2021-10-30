import React from "react";
import {Grid } from "@material-ui/core";
import Product from './Product/Product';

import useStyles from './style';
const products=[
                {id:1,name:"abcd",description:"dadad", price:"200", image:"https://m.media-amazon.com/images/I/61UxfXTUyvL._SY355_.jpg"},
                {id:1,name:"abcd",description:"dadad", price:"400", image:"https://i.gadgets360cdn.com/large/logitech_1557404938684.jpg"},
]; 
const Products=()=>{
    const classes = useStyles();
    return(
    <main className={classes.content}>
        <div classname={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                        </Grid>
                ))}
        </Grid>
    </main>
    )
}
export default Products;
