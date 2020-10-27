import React, {memo, useCallback, useEffect} from 'react'
import {Categories, BlockSale, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../redux/reducers/productReducer";
import Preloader from "../components/Preloader";
import {setCategory, setSortBy} from "../redux/reducers/filtersReducer";

const categoryName = ['Железные', 'Золотые', 'Каленные', 'Острые', 'Подленные']
const sortItems = [
    {name: 'Популярности', type: 'popular', order: 'desc'},
    {name: 'Цене', type: 'price', order: 'desc'},
    {name: 'Алфавиту', type: 'name', order: 'asc'}
    ]

const Home = memo( () => {
    //достаю из редакса нужные мне данные
    const {isLoaded, items} = useSelector(({product}) => product)
    const {category, sortBy} = useSelector(({filters}) => filters)
    //вместо connect использую хуки, тоесть вместо mapDispatchToProps
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(fetchProduct(category, sortBy))
    }, [category, sortBy])
    console.log(category, sortBy, "RENDER")
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryName} activeCategory={category} onSelectedItem={onSelectCategory}/>
                <SortPopup items={sortItems} onClickSortType={onSelectSortType} activeSortType={sortBy.type}/>
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((data) => ( <BlockSale key={data.id} {...data}/>))
                    : Array(12).fill(0).map((_, index) => <Preloader key={index}/>) }
            </div>
        </div>
    )
})
export default Home