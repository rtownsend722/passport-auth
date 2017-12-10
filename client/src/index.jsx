import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));