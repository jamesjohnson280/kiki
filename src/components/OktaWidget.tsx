import { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

import { Okta } from '@/config';

import '@okta/okta-signin-widget/css/okta-sign-in.min.css';

export const OktaWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef(null);
  useEffect(() => {
    if (!widgetRef.current) {
      return () => false;
    }

    const widget = new OktaSignIn(Okta.widget);

    // Search for URL Parameters to see if a user is being routed to the application to recover password
    const searchParams = new URL(window.location.href).searchParams;
    widget.otp = searchParams.get('otp');
    widget.state = searchParams.get('state');
    widget.showSignInToGetTokens({
        el: widgetRef.current,
      }).then(onSuccess).catch(onError);

      return () => widget.remove();
    }, [onSuccess, onError]);

  return (<div ref={widgetRef} />);
};
