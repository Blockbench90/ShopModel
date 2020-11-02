const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
//для подсчета общей суммы цены в массиве
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //создаст новый масив. Возьмет все старые значения по ключу[action.payload.id]
        //и в конеч добавь новый обьект
        case 'ADD_PRODUCT_TO_CART': {
            //в обьекте items возьми по ключу action.payload.id и если такого еще нету
            const currentProductItems = !state.items[action.payload.id]
                //создай массив из обьекта, который придет в action.payload
                ? [action.payload]
                //а если есть такой, то распарси список (проитерируй) items по ключу action.payload.id и добавь в конец весь обьект
                //коротый пришел в action.payload
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                //распарсит старые данные в state.items
                ...state.items,
                //и по ключу из action.payload.id создает обьект с двумя свойствами. Массивом items и подсчитаной ценой продуктов в этом массиве
                [action.payload.id]: {
                    items: currentProductItems,
                    totalPrice: getTotalPrice(currentProductItems)
                }
            }
            //чтобы считать не только длинну массива из обьектов, но и одинаковые обьекты, с одинаковым ID
            const items = Object.values(newItems).map((obj) => obj.items)
            const allProducts = [].concat.apply([], items)
            //пробегается по массиву обьектов и подсчитывает сумму всех obj.price
            const totalPrice = getTotalPrice(allProducts)
            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice: totalPrice
            }
        }
        //удалить один продукт из списка корзины
        case 'REMOVE_CART_ITEM': {
            //сначала создаст копию глобального обьекта items
            const newItem = {
                ...state.items
            }
            //до удаления скопирует текущие суммы цен и количества
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].items.length
            //удалит один обьект из продуктов в корзине
            delete newItem[action.payload]
            //и вернет текущее, скорректированное состояние
            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        //очистит корзину, вернув обнуленный, пустой стейт
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default:
            return state;
    }
}
export default cartReducer
//добавить прилитевший обьект в стейт
export const addProductToCart = (productObj) => ({type: 'ADD_PRODUCT_TO_CART', payload: productObj})
//удалить один из выбранных продуктов в корзине
export const removeCartItem = (id) => ({type: 'REMOVE_CART_ITEM', payload: id})
//очистить корзину
export const clearCart = () => ({type: 'CLEAR_CART'})






