import React from 'react'
import {Categories, BlockSale, SortPopup} from "../components";
import {useSelector} from "react-redux";

const Home = () => {
    console.log('Home render')
    const data = useSelector((data) => data.product.items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Веген', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['Популярности', 'Цене', 'Алфавиту']}/>
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content__items">
                {data && data.map((data) => (
                        <BlockSale key={data.id} {...data}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Home