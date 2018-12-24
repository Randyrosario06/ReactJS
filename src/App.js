import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Header from './components/Header/Header.js';
import Contenido from './components/Contenido/Contenido.js';
import firebase from './components/Firebase/Firebase.js';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
      }
  componentWillMount(){
    this.auhtListener();
    
  }

  auhtListener(){
    firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({user})
    }else{
      this.setState({user:null})
    }
  });
  }

  static propTypes = {
    children:PropTypes.object.isRequired
  };

  Logout(){
    firebase.auth().signOut().then(function() {
      
    }).catch(function(error) {
      
    });
  }


  render() {
    const {children} = this.props;
    return (
      <div>
      <div className="App">
        <Header/>
      </div>
      <div>
<Contenido body={children}/>
      </div>
      <button id="logout" onClick={this.Logout}>Logout</button>
      </div>
    );
  }
}

export default App;
