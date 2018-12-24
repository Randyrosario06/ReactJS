import React from 'react';
import{Route, Switch} from 'react-router-dom';

//import Header from './components/Header/Header.js';
import Logged from './components/Logged/Logged.js';
import App from './App.js';
import Home from './components/Home/Index.js';
import Login from './components/Login/Login.js';
import Registrarse from './components/Registrarse/Registrarse';

const Rutas = () => 
<App>
<Switch>
    <Route path="/login" component={Login}/>
    <Route path="/registrarse" component={Registrarse}/>
    <Route path="/postear" component={Logged}/>
    <Route path="/" component={Home}/>
</Switch>

</App>

export default Rutas;