import React, { useEffect, useState } from "react";
import ProductList from './ProductList';
import ProdDetails from './ProdDetails';
import Loader from "./Loader";
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";
import AddProduct from './AddProduct'; import EditProduct from './EditProduct';

const App = () => {


    const [currentProdut, setcurrentProdut] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [p1, setp1] = useState(null);

    // const idd = params.id;
    return (
        <>
            <Link to='/'>Product List</Link>
            <Link to='/Details'>Product Details</Link>
            <Link to='/AddProduct'>Add Product</Link>
            <Link to='/Edit'>Edit Product</Link>
            <Switch >
                <Route exact path='/'>
                    {/* {!isLoaded ? (<Loader />) : (<ProductList productList={productList} selectProduct={selectProduct} />)} */}
                    <ProductList />
                </Route>
                <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
                <Route path='/Details/:id'>
                    {/* {!isLoaded ? (<Loader />) : (<ProdDetails currentProdut={currentProdut} bactToList={bactToList} />)} */}
                    <ProdDetails />
                </Route>
                <Route exact path='/AddProduct' render={() => <AddProduct />}></Route>
                <Route path='/Edit/:id' render={() => <EditProduct />}></Route>
                <Route exact path='*'>
                    <p>404......Nothing found !!!</p>
                </Route>
            </Switch>

        </>
    );
}
export default App;