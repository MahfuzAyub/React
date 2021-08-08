import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import axios from "axios";
import Loader from "./Loader";
const ProductList = () => {
	const [productList, setProd] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProd(res.data);
				setIsLoaded(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};

	return (
		<>
			<h1>Product List</h1>
			<div>
				<div>{!isLoaded && <Loader />}</div>
				{productList.map((p) => {
					return (
						<div>
							<img src={p.image} style={{ width: "25% " }}></img>
							<p>{p.title}</p>
							<button onClick={() => getDetials(p.id)}>See Details</button>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default ProductList;
