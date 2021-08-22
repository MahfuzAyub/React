import React, { useEffect, useState } from "react";
import ProductList from './ProductList';
import ProdDetails from './ProdDetails';
import Loader from "./Loader";
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";
import AddProduct from './AddProduct'; import EditProduct from './EditProduct'; import DeleteProduct from './DeleteProduct';

const App = () => {
    const [currentProdut, setcurrentProdut] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [p1, setp1] = useState(null);
    

    return (
        <>
            <Link to='/'>Product List</Link>
            <Link to='/AddProduct'>Add Product</Link>
            <Switch >
                <Route exact path='/'>
                    <ProductList />
                </Route>
                <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
                <Route path='/Details/:id'>
                    <ProdDetails />
                </Route>
                <Route exact path='/AddProduct' render={() => <AddProduct />}></Route>
                <Route path='/Edit/:id' render={() => <EditProduct />}></Route>
                <Route path='/delete/:id' render={() => <DeleteProduct />}></Route>
                <Route exact path='*'>
                    <p>404......Nothing found !!!</p>
                </Route>
            </Switch>
        </>
    );
}
export default App;