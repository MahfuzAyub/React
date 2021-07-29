import React, { useEffect, useState } from "react";
import index from '../image/index.jpg';

const LoaderHook=()=>{
 return (
            <>            
            {
            //!this.props.isldd &&
            <div>
              <img src={index} alt='logo' />
                <p>.... loading.....</p>
            </div>}
            </>
        );
}
export default LoaderHook;