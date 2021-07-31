import React, { useEffect, useState } from "react";
import ProductHook from './ProductHook';
import ProdDetHook from './ProdDetHook';
import LoaderHook from "./LoaderHook";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

const Hooks = () => {
    const [productList, setProd] = useState([
        {
            name: 'Rocket', description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        },
        {
            name: 'Rocket', description: 'Freezer Description',
            price: 20000, category: 'Freezer Category',
        },
        {
            name: 'Rocket', description: 'Computer Description',
            price: 100000, category: 'Computer Category',
        }
    ]);
    const [currentProdut, setcurrentProdut] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setisLoaded(true), 500)
    }, []);

    const selectProduct = (data) => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        setcurrentProdut(data);
        console.log(data, "hooks:received data");
    };
    //const history = useHistory();
    const bactToList = () => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        setcurrentProdut(null);
        //  history.push('/');
    };
    return (
        <BrowserRouter>
            <>
                <Link to='/List'>Product List</Link>
                <Link to='/ProdDet'>Product Details</Link>

                <Switch >
                    <Route path='/List/:id'>
                        <ProductHook productList={productList} selectProduct={selectProduct} />
                    </Route>
                    <Route exact path='/ProdDet'>
                        <ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />
                    </Route>
                    <Route exact path='*'>
                        <p>404......Nothing found</p>
                    </Route>
                </Switch>
                {/* <div>
                {!isLoaded ? <LoaderHook /> :
                    <>
                        {!currentProdut ? (<ProductHook productList={productList} selectProduct={selectProduct} />)
                            : (<ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />)}
                    </>
                }
            </div> */}
            </>
        </BrowserRouter>
    );
}
export default Hooks;