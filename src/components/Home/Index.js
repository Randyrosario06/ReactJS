import React, {Component} from 'react';
import './Index.css';
import firebase from './../Firebase/Firebase.js';


class Index extends Component{
  constructor(props){
    super(props);
    this.state ={
      foto: null,
    }
  }

  componentWillMount(){
    const storage = firebase.storage();
    this.setState({foto:storage.ref('fotos/varilla.jpg').getDownloadURL().then(function(url){
      console.log(url); 
    })})
  }

  render() {
    return (
      <div >  
          <h1>
          index
          </h1>
          <div>
            <img src={this.state.foto} alt="" height="1800" width="1400"/>
          </div>
      </div>
    );
  }
}

export default Index;