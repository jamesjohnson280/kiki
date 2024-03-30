const clientId = "0oag4omgq9N6bMWRb5d7";
const oktaDomain = "dev-86310623.okta.com";

export const Okta = {
  oidc: {
    issuer: `https://${oktaDomain}/oauth2/default`,
    clientId,
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
    useInteractionCodeFlow: false,
  },
  widget: {
    issuer: `https://${oktaDomain}/oauth2/default`,
    clientId,
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
    useInteractionCodeFlow: false,
  },
};
