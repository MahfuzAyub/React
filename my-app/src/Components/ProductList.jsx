import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import axios from "axios";
import Loader from "./Loader";
import { setProductList_Store } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
const ProductList = () => {
	const reduxStore = useSelector((store) => store);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				dispatch(setProductList_Store(res.data));
				setIsLoaded(true);
			})
			.catch((error) => {});
	}, []);
	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};
	return (
		<>
			<h1>Product List</h1>
			<div>
				<div>{!isLoaded && <Loader />}</div>
				{reduxStore.productList.map((p) => {
					return (
						<div>
							<img src={p.image} style={{ width: "70px" }}></img>
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
