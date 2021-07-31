import React, { useEffect, useState } from "react";
import { useHistory, useLocation,useParams } from "react-router";


const ProdDetHook = ({ currentProdut, bactToList }) => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const back = () => {
        bactToList();
        history.push('/');
    }
    // console.log(location, "use loaction")
    // console.log(params, "params")
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