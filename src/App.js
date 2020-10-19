import React, {useEffect, useState} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";

function App() {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/db.json').then( (response) => response.json()).then((json => {
            setState(json.data)
        }))
    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home data={state}/>} exact/>
                <Route path='/cart' render={() => <Cart/>} exact/>
            </div>
        </div>
    );
}

export default App;
