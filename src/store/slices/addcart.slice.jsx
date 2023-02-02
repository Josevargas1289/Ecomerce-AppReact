import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const addCartSlice = createSlice({
    name: 'addCart',
    initialState: [],
    reducers: {
        setCart: (state, action)=>{
            const addCart = action.payload;
            return addCart;
        }

    }
});

export const getcartsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart',getConfig())
        .then((res) => dispatch(setCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addproductIdThunk = (productId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', productId, getConfig())
        .then((res) => dispatch(getcartsThunk(res.data)))
        .catch(()=>alert('hubo un error'))
        .finally(() => dispatch(setIsLoading(false)));
}
export const purchasescartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(getcartsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const deleteProductCarThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
        .then(() => dispatch(getcartsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setCart } = addCartSlice.actions;

export default addCartSlice.reducer;
