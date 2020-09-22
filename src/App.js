import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Servizi from "./components/pages/Servizi";
import Recensioni from "./components/pages/Recensioni";
import Contatti from "./components/pages/Contatti";
import ScrollToTop from "./components/ScrollToTop";
import Cookie from "./components/footer/Cookie";
import Recesso from "./components/footer/Recesso";
import Privacy from "./components/footer/Privacy";
import Condizioni from "./components/footer/Condizioni";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/servizi" component={Servizi}/>
                    <Route path="/recensioni" component={Recensioni}/>
                    <Route path="/contatti" component={Contatti}/>
                    <Route path="/cookie" component={Cookie}/>
                    <Route path="/recesso" component={Recesso}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/condizioni" component={Condizioni}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
