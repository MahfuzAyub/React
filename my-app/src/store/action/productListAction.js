import { actionType } from "../actionTypes";
import axios from "axios";

export const setProductList_Store = (productList) => ({
    type: actionType.update_product_list,
    payload: productList
}
);


export const requestProductList = () => {
    return async (dispatch) => {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProductList_Store(response.data));
        console.log("adfdfdf")
    };
};

//export default requestProductList;