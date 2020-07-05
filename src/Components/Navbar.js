import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;
