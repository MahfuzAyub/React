import React, { useEffect, useState } from "react";


const ProdDetHook=({currentProdut,bactToList})=>{
   // console.log(Array.from(currentProdut),"details")
    console.log(currentProdut,"in details")
    return (
            <><h1>Product Details</h1>
                {/* {!this.state.isLoaded && <LoadingImage />} */}
                {
                //this.state.isLoaded &&
            <div>
                <p>Name  : {currentProdut.name} </p>
                <p>Category : {currentProdut.category} </p>
                <p>Description  :{currentProdut.description} </p>
                <p>Price : {currentProdut.price} </p>
                <button onClick={() => bactToList()}>Back to List</button>
            </div>}
            </>
        )};
        export default  ProdDetHook;