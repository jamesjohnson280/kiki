import { ReactNode, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

interface ISecureProps {
  children: ReactNode
}

export const Secure = ({ children }: ISecureProps) => {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) return;
    if (!authState.isAuthenticated) {
      navigate('/');
    }
  }, [authState]);

  return children;
}