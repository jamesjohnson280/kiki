import { Redirect } from "react-router-dom";
import { OktaSignInWidget } from "../OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

export const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  //@ts-ignore
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  //@ts-ignore
  const onError = (err) => {
    console.log("error logging in", err);
  };

  if (!authState) return null;

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget onSuccess={onSuccess} onError={onError} />
  );
};
