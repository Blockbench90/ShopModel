import React, {useEffect, useState} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from "axios";
import {setProduct} from "./redux/action/product";
import {connect} from "react-redux";

function App({data, setProduct}) {
    debugger
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => setProduct(data.data))
    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home data={data}/>} exact/>
                <Route path='/cart' render={() => <Cart/>} exact/>
            </div>
        </div>
    );
}
const mapDispatchToProps = state => ({
    data: state.product.items
})
export default connect(mapDispatchToProps, {setProduct})(App);
