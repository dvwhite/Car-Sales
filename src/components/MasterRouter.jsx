import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Component imports
import Home from './Home';
import Car from './Car';

const MasterRouter = (props) => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cars/:id' render={props => <Car {...props} />}  />
      </Switch>
    </>
  )
}

export default MasterRouter;
