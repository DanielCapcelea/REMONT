import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Contacts from "./components/pages/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Cookie from "./components/footer/Cookie";
import Withdrawal from "./components/footer/Withdrawal";
import Privacy from "./components/footer/Privacy";
import Conditions from "./components/footer/Conditions";
import Construction from "./services/Construction";
import WorkWithUs from "./components/footer/WorkWithUs";
import Hydraulic from "./services/Hydraulic";
import Faucet from "./services/Faucet";
import External from "./services/External";
import Lock from "./services/Lock";
import Gardening from "./services/Gardening";
import Whitewashing from "./services/Whitewashing";
import Blinds from "./services/Blinds";
import Desoturantion from "./services/Desoturantion";
import Shower from "./services/Shower";
import Internal from "./services/Internal";
import Floor from "./services/Floor";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/servizi' component={Services}/>
                    <Route path='/contatti' component={Contacts}/>
                    <Route path='/cookie' component={Cookie}/>
                    <Route path='/recesso' component={Withdrawal}/>
                    <Route path='/privacy' component={Privacy}/>
                    <Route path='/condizioni' component={Conditions}/>
                    <Route path='/edilizia' component={Construction}/>
                    <Route path='/lavoro' component={WorkWithUs}/>
                    <Route path='/idraulici' component={Hydraulic}/>
                    <Route path='/rubinetti' component={Faucet}/>
                    <Route path='/esterni' component={External}/>
                    <Route path='/serramenti' component={Lock}/>
                    <Route path='/giardinaggio' component={Gardening}/>
                    <Route path='/imbiancatura' component={Whitewashing}/>
                    <Route path='/tapparelle' component={Blinds}/>
                    <Route path='/disotturazione' component={Desoturantion}/>
                    <Route path='/doccia' component={Shower}/>
                    <Route path='/interni' component={Internal}/>
                    <Route path='/pavimenti' component={Floor}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
