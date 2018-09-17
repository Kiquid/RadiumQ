import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Background from './components/background';
import Footer from './components/Footer';
import Pie from './components/Pie';
import Admin from './components/Admin';
import UserHome from './components/UserHomepage';
import User from './components/User';
import UDF from './components/UDF';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <Header/> 
        <Route exact path="/" component={Admin}/>
        <Route exact path="/User" component ={User}/> 
        <Route exact path="/UDF" component ={UDF}/>       
        <Footer/>
        </div>
      </Router>
      
    );
  }
}

export default App;
