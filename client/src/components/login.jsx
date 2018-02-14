import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // componentWillMount() {
  //   this.props.history.replace()
  // }

  // handleSignUpClick() {
  //   this.props.history.push('/signup');
  // }

  render() {
    return (
      <div>
        <h1>Log In</h1>
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
          <Link to='/signup'><button className='btn btn-primary'>Sign Up</button></Link>
          <br></br>
          <button className="btn btn-primary"><a href="/auth/facebook">Continue With Facebook</a></button>
        </form>
      </div>
    );
  }
}

export default Login;