import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideNav = () => {
  return (
    <div className='font-semibold '>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'block p-2 bg-gray-200 rounded-md'
                  : 'bg-white block p-2'
              }
              to='/authors'
            >
              Author List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'block p-2 bg-gray-200 rounded-md'
                  : 'bg-white block p-2'
              }
              to='/favoritelist'
            >
              Favorite Author List
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
