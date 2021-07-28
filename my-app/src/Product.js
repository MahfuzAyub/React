import { render } from "@testing-library/react";
import React, { Component } from "react";
import LoadingImage from "./LoadingImage";
import index from './image/index.jpg';

class Product extends Component {
   
    // hideLoaderP=(props) => (
    //      this.props.hl()
    // );
    state={isLoaded:false}

    componentDidMount(){
        setTimeout(() => {
            this.setState({ ...this.state, isLoaded: true });
        }, 200);        
        console.log(this.state.isLoaded,"inside cdm after load");
    };
    componentDidUpdate() {
        // alert('updated in product');
        // console.log(this.state.isLoading,'update in product');
    }
    componentWillUnmount() {
        //  alert('unmounted in product and showLoader now!!!');
        //<LoadingImage/>
    }

    render() {
        console.log(this.state.isLoaded, "inside render after cdm");
        return (
            <>            
                {!this.state.isLoaded && <LoadingImage />}
                <h1>Product List</h1>
                {this.state.isLoaded&&
                    this.props.productList.map(p => {
                        return (
                            <div
                                style={{
                                    marginBottom: '10px',
                                    border: '1px solid green',
                                }}
                                onClick={() => this.props.selectProduct(p)}
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
        );
    }
}
export default Product;