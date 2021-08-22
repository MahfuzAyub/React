import React, { useEffect, useState } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";
import axios from "axios";
import EditProduct from "./EditProduct";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct_Store } from "../store/action";

const ProdDetails = () => {
	const reduxStore = useSelector((store) => store);
	const dispatch = useDispatch();

	const [ProdDetails, setProdDetails] = useState();
	const { id } = useParams();
	const histor = useHistory();
	const bactToList = () => {
		histor.push("/");
	};
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				dispatch(setCurrentProduct_Store(res.data));
				setIsLoaded(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const goEditPage = (id) => {
		histor.push(`/Edit/${id}`);
	};
	const goDeletePage = (id) => {
		histor.push(`/delete/${id}`);
	};

	return (
		<>
			<h1>Product Details</h1>
			{
				<div>
					<div>{!isLoaded && <Loader />}</div>
					<img
						src={reduxStore.currentProduct?.image}
						style={{ width: "25% " }}></img>
					<p>Name : {reduxStore.currentProduct?.title} </p>
					<p>Category : {reduxStore.currentProduct?.category} </p>
					<p>Description :{reduxStore.currentProduct?.description} </p>
					<p>Price : {reduxStore.currentProduct?.price} </p>
					<button onClick={() => bactToList()}>Back to List</button>
					<div>
						<button onClick={() => goEditPage(ProdDetails.id)}>Edit</button>
					</div>
					<div>
						<button onClick={() => goDeletePage(ProdDetails.id)}>
							Delete Product
						</button>
					</div>
				</div>
			}
		</>
	);
};
export default ProdDetails;