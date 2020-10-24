import React, {useEffect} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from "axios";
import {setProduct} from "./redux/action/product";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('http://localhost:3001/data').then(({data}) => dispatch(setProduct(data)))
    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}
// const mapDispatchToProps = state => ({
//     data: state.product.items
// })
export default App;
