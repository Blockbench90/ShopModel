const initialState = {
    items: [],
    isLoaded: false
}

const productForSaleReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PRODUCT':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
export default productForSaleReducer