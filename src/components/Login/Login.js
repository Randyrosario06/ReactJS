import React, { Component } from 'react';
import Logo from './Rututiando.PNG';
import {Link} from 'react-router-dom';
import './Login.css';
import firebase from './../Firebase/Firebase.js'



const INITIAL_STATE = {
    email: '',
    password: ''
  };

class Login extends Component {
    constructor (props){
        super(props);
        this.state = {...INITIAL_STATE};
        this.state = {user:{}};
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePass = this.ChangePass.bind(this);
        this.Login = this.Login.bind(this);
    }

    ChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      ChangePass(event) {
        this.setState({password: event.target.value});
      }

      Login(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
           alert("Usuario o contraseña invalido");
          }); 
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

      componentWillUnmount(){
          this.auhtListener();
      }   

  render() {
    return (
      <div> 
          <form onSubmit={this.Login}>
          <h2>
            Login
          </h2>
          <img id="Logo" src={Logo}/>
              <label>
                  <input 
                  onChange={this.ChangeEmail}
                  name="email"
                  type="text" 
                  placeholder=" &#128587; Usuario"></input>
              </label><br></br>
              <label>
                  <input 
                  onChange={this.ChangePass}
                  name="pasword"
                  type="text" 
                  placeholder="&#128272; Contaseña"></input>
              </label>
              <label><br></br>
              <input type="submit" value="Iniciar sesion"></input>
              </label>
              <div>
                  <p>No tienes cuenta?...<Link to="registrarse">Registrate</Link></p>
              </div>
          </form>
      </div>
    );
  }
}
export default Login;