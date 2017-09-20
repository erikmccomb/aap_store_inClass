import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import FetchApps from './components/FetchApps';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    {/* this is gooing to match /apps as well as /apps/:id */}
    <Route path='/apps' component={FetchApps}/>
    <Route component={NoMatch}/>
  </Switch>
)

export default App;