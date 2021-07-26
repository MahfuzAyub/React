import React, { Component } from "react";
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductFunc from "./ProductFunc";
import index from './image/index.jpg';
import LoadingImage from './LoadingImage'

class App extends Component {

  state = {
    isLoading: true,
    productList:
      [
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
      ],
    currentProdut: null,
  };
  componentDidMount() {
    // alert('mounted in App'); // alert('image hidden in app'); //return this.hideLoader();
  };
  componentDidUpdate() {
    console.log('updaeted in App'); //return this.hideLoader();
  };
  componentWillUnmount() {
    // alert('unmounted in app');

  };
  selectProduct = (data) => {
    this.setState({ ...this.state, currentProdut: data });
  };
  bactToList = () => {
    this.setState({ ...this.state, currentProdut: null });
  };
  hideLoader = () => {
    this.setState({ ...this.state, isLoading: false })
  };
  render() {
    console.log(this.state.isLoading, "inside app render");
    return (
      <>
        {/* {this.state.isLoading && <LoadingImage hl={this.hideLoader} />}
          // <div>  <img src={index} alt='logo' /> <p>page is loading</p> </div>  */}
          

        {!this.state.currentProdut && <Product hl={this.hideLoader} productList={this.state.productList} selectProduct={this.selectProduct} />}

        {this.state.currentProdut && <ProductDetails currentProdut={this.state.currentProdut} bactToList={this.bactToList} />}
      </>
    );
  }
}
export default App;
