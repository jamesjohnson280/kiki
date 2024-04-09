import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react'

import { Nav } from '@/components';

export const Home = () => {
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();

  const handleLogin = async () => navigate('/login');

  const handleLogout = async () => oktaAuth.signOut();

  return (
    <div>
      <Nav />
      <h1>Home</h1>
      {
        authState?.isAuthenticated
          ? <button id="logout-button" type="button" onClick={handleLogout}>Logout</button>
          : <button id="login-button" type="button" onClick={handleLogin}>Login</button>
      }
    </div>
  );
};
