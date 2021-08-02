import React, { useEffect, useState } from "react";
import ProductHook from './ProductHook';
import ProdDetHook from './ProdDetHook';
import LoaderHook from "./LoaderHook";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect, useHistory, useLocation, useParams } from "react-router";

const Hooks = () => {
    const [productList, setProd] = useState([
        {
            id: 0, name: 'Mobile', description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        },
        {
            id: 1, name: 'Refrigertor', description: 'Freezer Description',
            price: 20000, category: 'Freezer Category',
        },
        {
            id: 2, name: 'Computer', description: 'Computer Description',
            price: 100000, category: 'Computer Category',
        }
    ]);
    const [productList1, setProd1] = useState([
        {
            id: 0, description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        },
        {
            id: 1, description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        }
    ]);
    const [currentProdut, setcurrentProdut] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [p1, setp1] = useState(null);
    //var p1 = null;

    useEffect(() => {
        //setTimeout(() => setisLoaded(true), 500)
        selectProduct();

    }, []);

    const selectProduct = (index) => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        // const p1 =
        var p2 = productList.filter(p => p.id === index);
        //     map((description, price, category) => {
        //     return { description, price, category }
        // }).
        //p1=   Object.assign({}, ...p2);
        setcurrentProdut(p2);
        console.log(p1, "current prod in hooks");

    };
    const bactToList = () => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        setcurrentProdut(null);
        //  history.push('/');
    };
    return (
        <>
            <Link to='/'>Product List</Link>
            <Link to='/Details'>Product Details</Link>
            <Switch >
                <Route exact path='/'>
                    <ProductHook productList={productList} selectProduct={selectProduct} />
                </Route>
                <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
                <Route path='/Details/:id'>
                    <ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />
                </Route>
                <Route exact path='/Details'>
                    <ProdDetHook currentProdut={productList} bactToList={bactToList} />
                </Route>
                <Route exact path='*'>
                    <p>404......Nothing found</p>
                </Route>
            </Switch>
        </>
    );
}
export default Hooks;