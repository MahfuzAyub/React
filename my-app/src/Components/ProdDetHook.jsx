import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const ProdDetHook = ({ currentProdut, bactToList }) => {
    const histor = useHistory();

    const back = () => {
        bactToList();
        histor.push('/');
    }
    //console.log(locatio, "use loaction")
    console.log(currentProdut, "currentProdut in details")
    return (
        <>
            <h1>Product Details</h1>
            {
                <div>
                    <p>Name  : {currentProdut[0]?.name} </p>
                    <p>Category : {currentProdut[0]?.category} </p>
                    <p>Description  :{currentProdut[0]?.description} </p>
                    <p>Price : {currentProdut[0]?.price} </p>
                    <button onClick={() => back()}>Back to List</button>
                </div>
            }
        </>
    )
};
export default ProdDetHook;