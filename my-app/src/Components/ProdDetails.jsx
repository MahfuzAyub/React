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
const ProdDetails = () => {
	const [ProdDetails, setProdDetails] = useState();
	const { id } = useParams();
	const histor = useHistory();
	const bactToList = () => {
		histor.push("/");
	};
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		//setTimeout(() => setisLoaded(true), 500)
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				setProdDetails(res.data);
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
					<img src={ProdDetails?.image} style={{ width: "25% " }}></img>
					<p>Name : {ProdDetails?.title} </p>
					<p>Category : {ProdDetails?.category} </p>
					<p>Description :{ProdDetails?.description} </p>
					<p>Price : {ProdDetails?.price} </p>
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
