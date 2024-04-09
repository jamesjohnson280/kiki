import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { OktaWidget } from "@/components/OktaWidget";

export const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ?
    navigate('/') :
    <OktaWidget onSuccess={onSuccess} onError={onError}/>;
};
