import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './privateRoute';
import {Route} from 'react-router-dom';
import Login from './components/login'
import Friends from './components/friends'

function App() {
  return (
    <div className="App">
      <Route path='/' render={props => <Login {...props}/>}/>
      <PrivateRoute exact path='/protected' component={Friends}/>
    </div>
  );
}

export default App;
