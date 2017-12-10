import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label className="login-label">Username</label>
          <input type="text" className="login-input form-control" placeholder="Enter username"></input>
        </div>
        <div className="form-group">
          <label className="login-label">Password</label>
          <input type="password" className="login-input form-control" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <button className="btn btn-primary">Sign Up</button>
        <br></br>
        <button className="btn btn-primary"><a href="/auth/facebook">Login With Facebook</a></button>
      </form>
    );
  }
}

export default Login;