import React, { useEffect, useState } from "react";
import ProductHook from './ProductHook';
import ProdDetHook from './ProdDetHook';

const Hooks = () => {
    const [productList, setProd] = useState([
        {
            name: 'Mobile', description: 'Mobile Description',
            price: 50000, category: 'smart Phone',
        },
        {
            name: 'Freezer', description: 'Freezer Description',
            price: 20000, category: 'Freezer Category',
        },
        {
            name: 'Computer', description: 'Computer Description',
            price: 100000, category: 'Computer Category',
        }
    ]);
    const [currentProdut, setcurrentProdut] = useState([]);
    const [isLoaded, setisLoaded] = useState([false]);

    useEffect(() => {

    }, []);

    const selectProduct = (data) => {
        setcurrentProdut({ ...currentProdut, data});
        console.log(data, "hooks:received")
        console.log(currentProdut, "cp")
    };
    const bactToList = () => {
        setcurrentProdut([...currentProdut, null]);
    };
    const hideLoader = () => {
        setisLoaded({ ...this.state, isLoading: true })
    };
    return (
        <>
            <div>
                {currentProdut && <ProductHook hl={hideLoader} productList={productList} selectProduct={selectProduct} />}

                {currentProdut && <ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />}
            </div> </>
    );
    //console.log({currentProdut}, "inside app render");
}
export default Hooks;