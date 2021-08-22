export const setProductList_Store = (productList) => {
    return { type: 'update_product_list', payload: productList };
};

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: 'update_CurrentProduct', payload: currentProduct };  
};

