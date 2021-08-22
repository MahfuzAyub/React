import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
const DeleteProduct = () => {
	const [product, setProudct] = useState();

	const editProduct = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
	const callDeleteApi = () => {
		axios
			.put(`https://fakestoreapi.com/products/${id}`)
			.then((response) => {
				alert(response.status, "-------respoonse Status");
				history.push("/");
			})
			.catch((error) => {
				alert(error, "-------error Status");
			});
	};
	useEffect(() => {
	}, []);

	return (
		<>
			<div>
				<h1>Sure to Delete The Product ??</h1>

				<div>
					<button onClick={callDeleteApi}>Delete</button>
				</div>
			</div>
		</>
	);
};
export default DeleteProduct;
