import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import {
	requestProductDetails,
	requestProductEdit,
} from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
	const [product, setProudct] = useState();
	const editProduct = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const reduxStore = useSelector((store) => store.detailStore);
	const callUpdateApi = (id) => {
		dispatch(requestProductEdit(id));
	};
	useEffect(() => {
		dispatch(requestProductDetails(id));
	}, [dispatch]);

	return (
		<>
			<div>
				<p>Name</p>
				<input
					value={reduxStore.currentProduct?.title}
					onChange={(e) => editProduct(e, "title")}
				/>
				<p>Description</p>
				<input
					value={reduxStore.currentProduct?.description}
					onChange={(e) => editProduct(e, "description")}
				/>
				<p>Price</p>
				<input
					value={reduxStore.currentProduct?.price}
					onChange={(e) => editProduct(e, "price")}
				/>
				<p>Category</p>
				<input
					value={reduxStore.currentProduct?.category}
					onChange={(e) => editProduct(e, "category")}
				/>
				<p>Image</p>
				<input
					value={reduxStore.currentProduct?.image}
					onChange={(e) => editProduct(e, "image")}
				/>
				<div>
					<button onClick={callUpdateApi}>Update</button>
				</div>
			</div>
		</>
	);
};
export default EditProduct;
