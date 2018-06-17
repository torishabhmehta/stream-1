import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import autorefresh from 'jwt-autorefresh'
import VolumeControl from './components/volume_user';

//const refresh = () => {
 // const init =  { method: 'POST'
  //              , headers: { 'Content-Type': `application/x-www-form-urlencoded` }
//                , body: `refresh_token=${localStorage.refresh_token}&grant_type=refresh_token`
  //              }
//  return fetch('http://localhost:8000/api/auh/token/obtain/', init)
  //  .then(res => res.json())
//    .then(({ token_type, access_token, expires_in, refresh_token }) => {
     // localStorage.access_token = access_token
      //localStorage.refresh_token = refresh_token
    //  return access_token
  //  })
//}

//const leadSeconds = () => {
  /** Generate random additional seconds (up to 30 in this case) to append to the lead time to ensure multiple clients dont schedule simultaneous refresh */
  //const jitter = Math.floor(Math.random() * 30)
 
  /** Schedule autorefresh to occur 60 to 90 seconds prior to token expiration */
 // return 60 + jitter
//}

//let start = autorefresh({ refresh, leadSeconds })
//let cancel = () => {}
//access_token => {
//  console.log('refreshed');
//  cancel()
//  cancel = start(access_token)
//};

class App extends Component {
  constructor(props){
     super(props) ;

     this.logout = this.logout.bind(this);  
   }
  logout(e){
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <VolumeControl />
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default App;