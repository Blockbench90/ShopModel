import React, {useState} from 'react'

const Categories = ({items}) => {
    const [selectItem, setSelectItem] = useState(0)
    const onSelectedItem = (index) => {
        setSelectItem(index)
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