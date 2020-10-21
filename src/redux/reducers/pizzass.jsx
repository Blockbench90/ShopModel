const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PIZZAS':
            return {
                ...state,
                pizzas: action.payload
            }
        default:
            return state;
    }
}
export default pizzas