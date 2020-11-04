import React, {useState} from 'react'
import Button from "./Button";
const activeType = {0: 'Small', 1: 'Big'}
const BlockSale = ({id, imageUrl, name, price, sizes, types, AddProductToCart, inCartProducts}) => {
    //для активации размера
    const [isActiveSize, setIsActiveSize] = useState(0)
    const onActiveSize = (index) => {setIsActiveSize(index)}
    //для активации блока
    const [isActiveBlock, setIsActiveBlock] = useState(0)
    const onActiveBlock = (index) => {setIsActiveBlock(index)}

    const handleAddProduct = () => {
        const obj = {
            id, name, imageUrl, price, size: sizes[isActiveSize], type: activeType[isActiveBlock]
        }
        AddProductToCart(obj)
    }
    return (
        <div className="product-block">
            <img className="product-block__image"
                //желательно размер фото 585/585 px
                src={imageUrl}
                alt="Pizza" />
            <h4 className="product-block__title">{name}</h4>
            <div className="product-block__selector">
                <ul>
                    {types.map((type, index) => (
                        <li key={`key_for_type${index}`}
                            onClick={() => onActiveBlock(index)}
                            className={isActiveBlock === index ? 'active' : 'disabled'}>{type === 0 ? activeType[0] : type === 1 ? activeType[1] : ''}</li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li onClick={() => onActiveSize(index)}
                            className={isActiveSize === index ? 'active' : ''}
                            key={`sizes_${ id + index}`}>{size}</li>
                    ))}
                </ul>
            </div>
            <div className="product-block__bottom">
                <div className="product-block__price">{`от ${price} $`}</div>
                <Button className="button--add" outline onClick={handleAddProduct}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {inCartProducts && <i>{inCartProducts}</i>}

                </Button>
            </div>
        </div>
    )
}
export default BlockSale