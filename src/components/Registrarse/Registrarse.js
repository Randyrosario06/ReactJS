import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Registrarse.css';
import firebase from './../Firebase/Firebase.js'

const INITIAL_STATE = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

class Registrarse extends Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeLastName = this.ChangeLastName.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePass = this.ChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    ChangeName(event) {
        this.setState({name: event.target.value});
      }
      ChangeLastName(event) {
        this.setState({lastname: event.target.value});
      }
      ChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      ChangePass(event) {
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            console.log(":(");
          });
          console.log(this.state.email);
          event.preventDefault();
      }

  render() {
 
    const{
        name,
    lastname,
    email,
    password
    }=this.state;

    const isInvalid =
      name ===''||
      password === '' ||
      email === '' ||
      lastname === '';
    return (
      <div >   
          <form>
          <h2>
          Registrarse
          </h2>
              <label>
                  <input name="name"
                  value={this.state.name}
                  onChange={this.ChangeName}
                  type="text" 
                  placeholder="Nombre"></input>
              </label><br></br>
              <label>
                  <input name="lastname"
                  value={this.state.lastname}
                  onChange={this.ChangeLastName}
                  type="text" 
                  placeholder="Apellido"></input>
              </label><br></br>
              <label>
                  <input name="email"
                  value={this.state.email}
                  onChange={this.ChangeEmail}
                  type="text" 
                  placeholder="Correo electronico"></input>
              </label><br></br>
              <label>
                  <input name="password"
                  value={this.state.password}
                  onChange={this.ChangePass}
                  type="text" placeholder="Contaseña"></input>
              </label>
              <label><br></br>
                  <input onClick={this.handleSubmit} disabled={isInvalid} type="button" value="Registrarse"></input>
              </label>
              <div>
                  <p>Ya posees una cuenta?...<Link to="login">Login</Link></p>
              </div>
             
          </form>
      </div>
    );
  }
}

export default Registrarse;