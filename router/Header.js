import React from 'react';
import { Link } from 'react-router-dom';

export default Header = () => (
  <React.Fragment>
    {/* or just <></> */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </React.Fragment>
);
