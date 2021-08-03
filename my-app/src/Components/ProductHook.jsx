import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
const ProductHook = ({ productList, selectProduct }) => {
    //   console.log(selectProduct)
    //   const [prod,setProd]=useState({namee: 'Computer', description: 'Computer Description',
    //         price: 100000, category: 'Computer Category'});
    //   const addProd=()=>{
    //      setProd(...prod,
    //         prod.namee: 'xxxxxxxxxx', description: 'xxxxxxxxxxxxx',
    //         price: 100000, category: 'xxxxxxxxxxxxx') }; }
    //   const addProd=()=>{
    //       selectProduct(p);
    //   }
    const params = useParams();

    const history = useHistory();
    //console.log(params, "========params old==========");
    const getDetials = (index) => {
        console.log(index, "========index==========");
        var url = `/Details/${index}`;
        history.push(`/Details/${index}`);
        console.log(url, "========url==========");
        selectProduct(index);

    }

    return (
        <>
            {/* <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route> */}
            <h1>Product List</h1>
            {//this.state.isLoaded&&
                productList?.map((p, index) => {
                    //  console.log(p, "type")
                    return (
                        <div style={{ marginBottom: '10px', border: '1px solid green', }}
                            onClick={() => getDetials(p.id)}>
                            {params.id = index}
                            <p>Name  : {p.name} </p>
                            {/* <p>Category : {p.category} </p>
                                <p>Description  :{p.description} </p> */}
                            <p>Price : {p.price} </p>
                        </div>
                    );
                })
            }
        </>
    )
};
export default ProductHook;