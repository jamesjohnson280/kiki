import React, { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import { Okta } from "../config/okta";

// import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
// @ts-ignore
export const OktaSignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef(null);
  useEffect(() => {
    if (!widgetRef.current) {
      return;
    }

    const widget = new OktaSignIn(Okta.widget);

    // Search for URL Parameters to see if a user is being routed to the application to recover password
    var searchParams = new URL(window.location.href).searchParams;
    // @ts-ignore
    widget.otp = searchParams.get("otp");
    // @ts-ignore
    widget.state = searchParams.get("state");
    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return <div ref={widgetRef} />;
};
