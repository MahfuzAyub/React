import { assertExpressionStatement } from "@babel/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductFunc() {
    const url = 'https://api.unsplash.com/photos/random?client_id=Z5O2_Qi81KHnmcBofRiEsmxuuLaQf3ZVaIFmjy3ywuk&count=100';
    const [prods, setProd] = useState([]);
    const getProds = () => {
        axios.get(url).then((res) => {
            setProd(res.data);
        });
    };
    useEffect(() => {
        getProds();
    }, [])

    if (!prods) {
        return <h1>.....</h1>
    }
    return (
        <div>
            {prods.map((image) => {
                return (<LazyLoadImage
                    effect="blur"
                    src={image.urls.regular}
                    key={image.id}
                    height='400px'
                    width='400px'
                    placeholderSrc={process.env.PUBLIC_URL + './logo192.png'}
                />);
            })}
        </div>
    )
}
export default ProductFunc;