import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
const EditProduct = () => {
	const [product, setProudct] = useState();
	const editProduct = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
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
				alert(response.status, "-------respoonse Status");
				history.push("/");
			})
			.catch((error) => {
				alert(error, "-------error Status");
			});
	};
	useEffect(() => {
		//setTimeout(() => setisLoaded(true), 500)
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				setProudct(res.data);
				console.log(res.data);
				console.log(product);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div>
				<p>Nameeeee</p>
				<input
					value={product?.title}
					onChange={(e) => editProduct(e, "title")}
				/>
				<p>Description</p>
				<input
					value={product?.description}
					onChange={(e) => editProduct(e, "description")}
				/>
				<p>Price</p>
				<input
					value={product?.price}
					onChange={(e) => editProduct(e, "price")}
				/>
				<p>Category</p>
				<input
					value={product?.category}
					onChange={(e) => editProduct(e, "category")}
				/>
				<p>Image</p>
				<input
					value={product?.image}
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
