import React, { Component } from "react";
import LoadingImage from "./LoadingImage";

class ProductDetails extends Component {
    state = { isLoaded: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ...this.state, isLoaded: true });
        }, 200);
        console.log(this.state.isLoaded, "inside cdm after load");
    };
    componentDidUpdate() {
       // alert('updated in Details');
    }
    componentWillUnmount() {
        //alert('unmounted in Details and Show Loader now!!!');
    }
    render() {
        return (
            <><h1>Product Details</h1>
                {!this.state.isLoaded && <LoadingImage />}
                {this.state.isLoaded &&
            <div>
                <p>Name  : {this.props.currentProdut?.name} </p>
                <p>Category : {this.props.currentProdut?.category} </p>
                <p>Description  :{this.props.currentProdut?.description} </p>
                <p>Price : {this.props.currentProdut?.price} </p>
                <button onClick={() => this.props.bactToList()}>Back to List</button>
            </div>}
            </>
        );
    }
}
export default ProductDetails;