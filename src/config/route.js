import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from '../pages';

export default function route() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
