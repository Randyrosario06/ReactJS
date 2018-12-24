import React, { Component } from 'react';
import './Postear.css';
import firebase from './../Firebase/Firebase.js';


class Postear extends Component {
  constructor(props){
    super(props);
    this.state = {
      upload:0,
      foto: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const tarea = storageRef.put(file);
    tarea.on('state_changed', snapshot =>{
      let porcent = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      this.setState({upload:porcent})
      storageRef.getDownloadURL().then(function(url){
        const codi =  url;
        console.log(codi);
      })
     }, 
     () => {
       this.setState({
         upload: 100,
         foto: storageRef.getDownloadURL(),
       });
     });
  }

  render() {
    return (
      <div >
        <form>
        <h1>Postear</h1>
       
           <label>
               Sube tu experiencia!<br></br>
        <input type="file" id="archivo" accept="image/*" onChange={this.handleChange}></input>
        </label><br></br>
        <div>
          <progress value={this.state.upload} max="100"> {this.state.upload} %</progress>
        </div>
        <div>
        <img src={this.state.foto}/>
        </div>
        </form>
      </div>
    );
  }
}

export default Postear;