import React, {Component} from 'react';
import firebase from './../Firebase/Firebase.js'
import Login from './../Login/Login.js';
import Postear from './../Postear/Postear.js';

class Index extends Component{
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

  render() {
    return (
      <div >  
         {this.state.user ? (<Postear/>):(<Login/>)}
      </div>
    );
  }
}

export default Index;