import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, makeStyles} from '@material-ui/core/styles';
import Home from './components/Home'

const useStyles = makeStyles({
  root: {
      width: "100vw",
      minHeight: "100vh",
      overflow: "hidden",
      backgroundColor: "rgba(245,245,245 ,1)",
      position: "relative",
      paddingBottom: "80px",
      boxSizing: "border-box"
  }
});

const App = () => {
  // const classes = useStyles(props);

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
};

export default App;
