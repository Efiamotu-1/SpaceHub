import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/space-img.png';

const Navbar = () => {
  const activeLink = 'underline hover:text-stone-900 active:text-gray-400';
  const links = [
    {
      id: 1,
      path: '/',
      text: 'ROCKETS',
    },
    {
      id: 2,
      path: '/missions',
      text: 'MISSIONS',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'MY PROFILE',
    },
  ];

  return (
    <nav className="md:flex justify-between mx-5 px-5 py-2 bg-gray-00 items-center border-b border-b-gray-200">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-20 mr-2" />
        <p className="text-3xl">Space Traveler&apos;s Hub</p>
      </div>

      <div>

        <div className="flex space-x-14 items-center mx-5">

          <ul className="flex space-x-14 text-2l text-blue-500">
            {links.map(({ id, path, text }) => (
              <li key={id}>
                <NavLink
                  end
                  to={path}
                  className={({ isActive }) => (isActive ? activeLink : 'hover:text-stone-900 active:text-gray-400')}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
