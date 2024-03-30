import { Switch, useHistory, Route } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

import { Login, Home, Profile } from "./page";
import { Okta } from "./config/okta";

export const Routes = () => {
  const oktaAuth = new OktaAuth(Okta.oidc);
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };
  //@ts-ignore
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
        <SecureRoute path="/profile" component={Profile} />
        <Route
          path="/login"
          // render={() => <Login config={oktaSignInConfig} />}
        />
        <Route path="/login/callback" component={LoginCallback} />
      </Switch>
    </Security>
  );
};
