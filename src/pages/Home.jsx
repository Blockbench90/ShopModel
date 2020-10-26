import React, {useCallback, useEffect} from 'react'
import {Categories, BlockSale, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../redux/reducers/productReducer";
import Preloader from "../components/Preloader";
import {setCategory} from "../redux/reducers/filtersReducer";

const Home = () => {
    const {isLoaded, items} = useSelector(({product}) => product)
    const {category, sortBy} = useSelector(({filters}) => filters)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!items.length) {
            dispatch(fetchProduct())
        }
    }, [category])
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    console.log(isLoaded, items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Веген', 'Гриль', 'Острые', 'Закрытые']} activeCategory={category} onSelectedItem={onSelectCategory}/>
                <SortPopup items={['Популярности', 'Цене', 'Алфавиту']}/>
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((data) => ( <BlockSale key={data.id} {...data}/>))
                    : Array(12).fill(0).map((_, index) => <Preloader key={index}/>) }
            </div>
        </div>
    )
}
export default Home