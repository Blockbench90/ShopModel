import React from 'react'

const Categories = ({items, activeCategory, onSelectedItem}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSelectedItem(null)}>
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li key={`key_with_index${index}`}
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onSelectedItem(index)}
                    >{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Categories