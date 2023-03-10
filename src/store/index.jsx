import { configureStore } from '@reduxjs/toolkit'
import  addCartSlice  from './slices/addcart.slice'
import isLoadingSlice from './slices/isLoading.slice'
import  productsSlice  from './slices/Products.slice'
import  purchasesSlice  from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice,
        purchases: purchasesSlice,
        addcart: addCartSlice,
       
        

    }
})
