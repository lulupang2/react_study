import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Statestudy } from './component/statestudy';
import { Home } from './component/home';
import { Menu } from './component/menu';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Route path="/" component={Home} />

        <Switch>
          <Route path="/state" component={Statestudy}/>
        </Switch>
      </BrowserRouter>
      </div>

  );

  }


export default App;
