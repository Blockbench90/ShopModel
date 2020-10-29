const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //создаст новый масив. Возьмет все старые значения по ключу[action.payload.id]
        //и в конеч добавь новый обьект
        case 'ADD_PRODUCT_TO_CART':{
            const newItems = {
                //распарси старые данные в state.items
                ...state.items,
                //в обьекте items возьми по ключу action.payload.id и если такого еще нету
                [action.payload.id] : !state.items[action.payload.id]
                    //создай массив из обьекта, который придет в action.payload
                    ? [action.payload]
                    //а если есть такой, то распарси список (проитерируй) items по ключу action.payload.id и добавь в конец весь обьект
                    //коротый пришел в action.payload
                    : [...state.items[action.payload.id], action.payload]
            }
            return {
                ...state,
                items: newItems,
                //установи сдетчик продуктов из актуального списка обьектов, преобразуя обьект в массив ключей,  выдай количество ключей
                totalCount: Object.keys(newItems).length
            }
        }
        default:
            return state;
    }
}
export default cartReducer

export const addProductToCart = (productObj) => ({type: 'ADD_PRODUCT_TO_CART', payload: productObj})






