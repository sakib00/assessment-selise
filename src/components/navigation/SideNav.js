import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const SideNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/authors'>Author List</Link>
          </li>
          <li>
            <Link to='/favoritelist'>Favorite Author List</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
