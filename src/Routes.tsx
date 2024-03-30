import { Switch, Route } from "react-router-dom";
import { Login, Home } from "./page";

export const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Home} />
  </Switch>
);
