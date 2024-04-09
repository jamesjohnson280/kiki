import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import { Okta, Routes } from '@/config';

export const App = () => {
  const router = createBrowserRouter(Routes);
  const oktaAuth = new OktaAuth(Okta.oidc);

  const customAuthHandler = () => {
    history.pushState({}, '', '/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replaceState({}, '', toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <RouterProvider router={router} />
    </Security>
  );
};
