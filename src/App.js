import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Chat from './components/Chat'
import {NotFound} from './components/NotFound'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route path='*' children={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
