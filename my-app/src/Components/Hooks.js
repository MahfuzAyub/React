import React, { useEffect, useState } from "react";
import ProductHook from './ProductHook';
import ProdDetHook from './ProdDetHook';
import Loader from "./Loader";
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";

const Hooks = () => {
    const [productList, setProd] = useState([
        {
            id: 10000001, name: 'Mobile', description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        },
        {
            id: 10000002, name: 'Refrigertor', description: 'Freezer Description',
            price: 20000, category: 'Freezer Category',
        },
        {
            id: 10000003, name: 'Computer', description: 'Computer Description',
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
    const { params } = useParams();
    // const idd = params.id;

    useEffect(() => {
        setTimeout(() => setisLoaded(true), 500)
    }, []);

    const selectProduct = (params) => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        var p2 = productList.filter(p => p.id === params);
        //     map((description, price, category) => {
        //     return { description, price, category } });
        setcurrentProdut(Object.assign({}, ...p2));
    };
    const bactToList = () => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        setcurrentProdut(null);
    };
    console.log({ isLoaded }, "*********isLoaded");
    return (
        <>
            <Link to='/'>Product List</Link>
            <Link to='/Details'>Product Details</Link>
            <Switch >
                <Route exact path='/'>
                    {!isLoaded ? (<Loader />) : (<ProductHook productList={productList} selectProduct={selectProduct} />)}
                </Route>
                <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
                <Route path='/Details/:id'>
                    {!isLoaded ? (<Loader />) : (<ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />)}
                </Route>
                <Route exact path='/Details'>
                    <ProdDetHook currentProdut={null} bactToList={bactToList} />
                </Route>
                <Route exact path='*'>
                    <p>404......Nothing found !!!</p>
                </Route>
            </Switch>
        </>
    );
}
export default Hooks;