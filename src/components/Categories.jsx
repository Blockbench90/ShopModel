import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/action/filters";

const Categories = ({items}) => {
    console.log('Categories render')
    const dispatch = useDispatch()
    const [selectItem, setSelectItem] = useState(0)
    const onSelectedItem = (index) => {
        setSelectItem(index)
        dispatch(setCategory(index))
    }
    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => (
                    <li key={`key_with_index${index}`}
                        className={selectItem === index ? 'active' : ''}
                        onClick={() => onSelectedItem(index)}
                    >{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Categories