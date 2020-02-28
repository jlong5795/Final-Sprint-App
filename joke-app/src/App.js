import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <div className='App'>
      <h1>We have to start somewhere...</h1>
      <nav>
        <a href='/login'>Login</a>
        <a href='/register'>Register</a>
      </nav>
      <Router>
        <Switch>
          <Route exact path='/register'>
            <Registration />
          </Route>
          <Route
            exact
            path='/login'
            render={props => (
              <Login {...props} jokes={jokes} setJokes={setJokes} />
            )}
          />
          <PrivateRoute exact path='/jokes'>

          <Jokes jokes={jokes} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
