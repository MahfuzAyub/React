import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
const EditProduct = () => {
	const [product, setProdDetails] = useState();
	
	const editProduct = (e, key) => {
		setProdDetails({ ...product, [key]: e.target.value });
	};
	const { id } = useParams();
	const callUpdateApi = () => {
		axios
			.put(`https://fakestoreapi.com/products/${id}`, {
				name: product.name,
				description: product.description,
				price: product.price,
				category: product.category,
				image: product.image,
			})
			.then((response) => {
				console.log(response, "-------respoonse edit");
			})
			.catch((error) => {
				console.log(error, "-------error edit");
			});
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
	console.log(product, 'dfdfdfdf');
	return (
		<>
			<div>
				<p>Nameeeee</p>
				<input   onChange={(e) => editProduct(e, "name")} />
				<p>Description</p>
				<input onChange={(e) => editProduct(e, "description")} />
				<p>Price</p>
				<input onChange={(e) => editProduct(e, "price")} />
				<p>Category</p>
				<input onChange={(e) => editProduct(e, "category")} />
				<p>Image</p>
				<input onChange={(e) => editProduct(e, "image")} />
				<div>
					<button onClick={callUpdateApi}>Update</button>
				</div>
			</div>
		</>
	);
};
export default EditProduct;
