import { Link } from 'react-router-dom';

export const Nav = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/protected">Protected</Link></li>
  </ul>
);