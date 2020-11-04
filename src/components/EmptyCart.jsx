import React from "react";
import cartEmptyImage from "../assets/img/empty-cart.png";
import {NavLink} from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <i>😕</i>
            </h2>
            <p>
                Вероятней всего, вы еще ничего не заказывали.
                <br />
                Для того, чтобы сделать заказ, перейдите на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <NavLink to="/" className="button button--black">
                <span>Вернуться назад</span>
            </NavLink>
        </div>
    )
}
export default EmptyCart