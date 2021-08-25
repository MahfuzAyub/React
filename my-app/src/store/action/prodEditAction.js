import { actionType } from "../actionTypes";
import axios from "axios";

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: actionType.update_CurrentProduct, payload: currentProduct };
};


export const requestProductEdit = (id) => {
    return async (dispatch) => {
        const response = await axios.put(`https://fakestoreapi.com/products/${id}`);
        dispatch(setCurrentProduct_Store(response.data));
    }
}