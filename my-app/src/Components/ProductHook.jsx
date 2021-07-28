import React, { useEffect, useState } from "react";

const ProductHook=({productList,selectProduct})=>{
   //   console.log(selectProduct)

    //   const [prod,setProd]=useState({namee: 'Computer', description: 'Computer Description',
    //         price: 100000, category: 'Computer Category'});
    //   const addProd=()=>{
    //      setProd(...prod,
    //         prod.namee: 'xxxxxxxxxx', description: 'xxxxxxxxxxxxx',
    //         price: 100000, category: 'xxxxxxxxxxxxx')
    //     };
    //   }
    //   const addProd=()=>{
    //       selectProduct(p);
    //   }
return (
    
            <>            
                {/* {!this.state.isLoaded && <LoadingImage />} */}
                <h1>Product List</h1>
                {//this.state.isLoaded&&
                    productList.map(p => {
                      //  console.log(p,"type")
                        return (
                            <div style={{ marginBottom: '10px', border: '1px solid green', }}
                                onClick={() => selectProduct(p)}
                            >                                
                                <p>Name  : {p.name} </p>
                                {/* <p>Category : {p.category} </p>
                                <p>Description  :{p.description} </p> */}
                                <p>Price : {p.price} </p>
                            </div>
                        );
                    })
                } 
                {/* <button onClick={() => this.props.hl()}>Hide Loader</button> */}
            </>
        )};
        export default  ProductHook;