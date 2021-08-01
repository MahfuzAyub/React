import React, { useEffect, useState } from "react";
import { useHistory  } from "react-router";

const ProdDetHook = ({ currentProdut, bactToList }) => {
    const histor = useHistory();

    const back = () => {
        bactToList();
        histor.push('/');
    }
    //console.log(locatio, "use loaction")
    //console.log(param, "params")
    return (
        <><h1>Product Details</h1>
            {/* {!this.state.isLoaded && <LoadingImage />} */}
            {
                //this.state.isLoaded &&
                <div>
                    <p>Name  : {currentProdut?.name} </p>
                    <p>Category : {currentProdut?.category} </p>
                    <p>Description  :{currentProdut?.description} </p>
                    <p>Price : {currentProdut?.price} </p>
                    <button onClick={() => back()}>Back to List</button>
                </div>}
        </>
    )
};
export default ProdDetHook;