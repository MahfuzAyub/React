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
const ProdDetails = () => {
	const [ProdDetails, setProdDetails] = useState();
	const { id } = useParams();
	const histor = useHistory();
	const bactToList = () => {
		histor.push("/");
	};
	useEffect(() => {
		//setTimeout(() => setisLoaded(true), 500)
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				setProdDetails(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const goEditPage = (id) => {
		histor.push(`/Edit/${id}`);
	};

	return (
		<>
			<h1>Product Details</h1>
			{
				<div>
					<img src={ProdDetails?.image} style={{ width: "25% " }}></img>
					<p>Name : {ProdDetails?.title} </p>
					<p>Category : {ProdDetails?.category} </p>
					<p>Description :{ProdDetails?.description} </p>
					<p>Price : {ProdDetails?.price} </p>
					<button onClick={() => bactToList()}>Back to List</button>
					<div>
						<button onClick={() => goEditPage(ProdDetails.id)}>Edit</button>
					</div>
				</div>
			}
		</>
	);
};
export default ProdDetails;
