import React, {Component} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('i mounted');
    alert('yoyoyo');
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Secret Home Page!</h1>
      </div>
    );
  }
}

export default Home;