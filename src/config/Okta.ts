const domain = 'dev-86310623.okta.com';
const clientId = '0oag4omgq9N6bMWRb5d7';

export const Okta = {
  oidc: {
    issuer: `https://${domain}/oauth2/default`,
    clientId: `${clientId}`,
    scopes: ['openid', 'profile', 'email'],
    redirectUri: `${window.location.origin}/login/callback`
  },
  widget: {
    issuer: `https://${domain}/oauth2/default`,
    clientId: `${clientId}`,
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
  }
};