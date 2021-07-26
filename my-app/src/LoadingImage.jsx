import React, { Component } from "react";
import index from './image/index.jpg';
class LoadingImage extends Component {

state = {isLoaded: false};
hideLoader1 =(props)=>{
    var c=this.props;
    console.log(c);
     //  return this.props.hl();
    } ;

componentDidMount() {
      this.hideLoader1();
    };
componentDidUpdate(){
       // alert('updated in loader');
    }
componentWillUnmount() {
        //alert('unmounted in loader & Loader is hidden now!!!');
        //alert('image hidden by Loader Unmount');
    }

render() {
        return (
            <>
            
            {!this.props.isldd &&
            <div>
              <img src={index} alt='logo' />
                <p>.... loading.....</p>
            </div>}
            </>
        );
    }
}
export default LoadingImage;