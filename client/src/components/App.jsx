import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;