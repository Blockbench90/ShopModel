import axios from "axios";

const initialState = {
    items: [],
    isLoaded: false
}

const productForSaleReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PRODUCT':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
}
export default productForSaleReducer

const setProduct = (items) => ({ type: 'SET_PRODUCT', payload: items })
const setLoaded = (payload) => ({ type: 'SET_LOADED', payload})
export const fetchProduct = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/data').then(({data}) => dispatch(setProduct(data)))
}