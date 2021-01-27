import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import {HomePage} from '../views';
import {RecipeContainer} from '../containers';
import {SignIn} from '../views';
import {SignUp} from '../views';
import {Profile} from '../views';
import {ViewProfile} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/viewrecipes" component={RecipeContainer}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
     <Route exact path="/profile" component={Profile}/>
  {/* <Route exact path="Profile/:id" component={ViewProfile}/> */}
    </Switch>
  );
};

export default RoutesView;