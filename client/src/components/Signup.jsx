import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      name: ''
    };
  }

  componentWillMount() {
    console.log('in will mount');
    axios('/user')
    .then(({data}) => {
      console.log(data);
      if (data.firstName) {
        const name = data.firstName;
        this.setState({
          name: name
        });
        this.props.history.replace("/home");
      }
    });
  }


  updateFirstName(e) {
    console.log('updated');
    this.setState({
      firstName: e.target.value
    });
  }

  updateLastName(e) {
    console.log('updated');
    this.setState({
      lastName: e.target.value
    });
  }

  updateUsername(e) {
    console.log('updated');
    this.setState({
      username: e.target.value
    });
  }

  updatePassword(e) {
    console.log('updated');
    this.setState({
      password: e.target.value
    });
  }

  handleSignUpClick() {
    console.log('clicked');
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let username = this.state.username;
    let password = this.state.password;

    axios({
      method: 'post',
      url: '/signup',
      baseURL: 'http://localhost:3000',
      data: {firstName, lastName, username, password}
    }).then(res => {
      console.log(res.data);
      console.log(this.props.history);
      this.props.history.push("/home");
    }).catch(err => {
      console.log(err);
    });
  }


  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label className="signup-label">First Name</label>
            <input type="text" className="signup-input form-control" placeholder="Enter first name" onChange={this.updateFirstName.bind(this)}></input>
          </div>
          <div className="form-group">
            <label className="signup-label">Last Name</label>
            <input type="text" className="signup-input form-control" placeholder="Enter last name" onChange={this.updateLastName.bind(this)}></input>
          </div>
          <div className="form-group">
            <label className="signup-label">Username</label>
            <input type="text" className="signup-input form-control" placeholder="Enter username" onChange={this.updateUsername.bind(this)}></input>
          </div>
          <div className="form-group">
            <label className="signup-label">Password</label>
            <input type="password" className="signup-input form-control" placeholder="Password" onChange={this.updatePassword.bind(this)}></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSignUpClick.bind(this)}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;