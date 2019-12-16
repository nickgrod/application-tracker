import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import App from './App'

const AppRouter = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/main">
            <App />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  );
}
export default AppRouter