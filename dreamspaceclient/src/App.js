import React, { Component } from 'react';
import SiteBar from './home/Navbar';
import './App.css';
import Auth from './auth/Auth';
import Sidebar from './home/Sidebar';
import Footer from './home/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }
  
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }
    
  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }
  
  signout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Router path='/' excat>
            <Sidebar token={this.state.sessionToken} />
          </Router>
          <Footer />
        </Switch>
      )
    } else {
      return (
        <Route path='/auth'>
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <SiteBar clickSignout={this.signout} />
          {this.protectedViews()}
        </div>
      </Router>
    ); 
  }
}

export default App;
