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
    const bactToList = () => {
        setisLoaded(false);
        setTimeout(() => setisLoaded(true), 500);
        setcurrentProdut(null);
    };
    //console.log(isLoaded, "========isLoaded");
    return (
        <>
            <div>
                {!isLoaded && <LoaderHook />}
                {isLoaded && !currentProdut && <ProductHook productList={productList} selectProduct={selectProduct} />}

                {isLoaded && currentProdut && <ProdDetHook currentProdut={currentProdut} bactToList={bactToList} />}
            </div> </>
    );
}
export default Hooks;