import { Link } from 'react-router-dom';

export const Nav = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
);