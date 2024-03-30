import { Switch, Route } from "react-router-dom";
import { Login, Home } from "./page";

export const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);
