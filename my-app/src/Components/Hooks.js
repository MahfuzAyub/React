import React, { useEffect, useState } from "react";
import ProductHook from './ProductHook';
import ProdDetHook from './ProdDetHook';
import LoaderHook from "./LoaderHook";

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
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setisLoaded(true), 200)
    }, []);

    const selectProduct = (data) => {
        setcurrentProdut(data);
        console.log(data, "hooks:received data");
    };
    const bactToList = () => {
        setcurrentProdut([]);
    };
    const hideLoader = () => {
        setTimeout(() => 
            setisLoaded(true) , 200);
    };
    console.log(isLoaded, "========isLoaded");
    return (
        <>
            <div>
                {!isLoaded && <LoaderHook />}
                {currentProdut.length == 0 && <ProductHook  productList={productList} selectProduct={selectProduct} />}

                {currentProdut.length != 0 && <ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />}
            </div> </>
    );
}
export default Hooks;