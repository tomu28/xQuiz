import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import {NotFound} from './components/NotFound'

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='*' children={<NotFound />} />
    </Switch>
  );
};

export default App;
