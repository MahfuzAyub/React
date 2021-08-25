import { actionType } from "../actionTypes";
import axios from "axios";

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: actionType.update_CurrentProduct, payload: currentProduct };
};


export const requestProductDetails = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch(setCurrentProduct_Store(response.data));
    }
}

export const requestProductEdit = (id) => {
    return async (dispatch) => {
        const response = await axios.put(`https://fakestoreapi.com/products/${id}`);
        console.log(response.status,"updatae")
        dispatch(setCurrentProduct_Store(response.data));
    }    
}

export const requestProductDelete = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
        console.log(response.status, "del")
        dispatch(setCurrentProduct_Store(null));
    }
}