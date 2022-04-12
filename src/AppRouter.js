import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Login from './Login/Login.js'
import Apps from './Components/App/App'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/create-playlist">Create Playlistt</Link>
                    </li>
                  </ul>
                </nav>
              <Switch>
                <Route  path='/login' >
                  <Login/>
                </Route>
                <Route path='/create-playlist' component={Apps} />
                <Route exact path='/' >
                  <Apps/>
                </Route>
              </Switch>
            </BrowserRouter>
      );
    }
  }
  export default AppRouter;