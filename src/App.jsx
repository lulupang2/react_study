import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Statestudy } from './component/statestudy';
import { Home } from './component/home';
import { Menu } from './component/menu';
import { Input } from './component/input'
import Shoping from './shop/index'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/state" component={Statestudy} />
          <Route path="/input" component={Input} />
          <Route path="/shoping" component={Shoping} />

        </Switch>
      </BrowserRouter>
      </div>

  );

  }


export default App;
