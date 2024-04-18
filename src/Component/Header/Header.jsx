import React from 'react';
import { Link,NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 w-full z-10">
      
        <h1 className="text-white text-2xl font-bold">Satyamev singh </h1>
        <nav className="space-x-4">
          <NavLink to= "/" 
            className= {({isActive})  => 
                         `text-white hover:text-gray-300 ${isActive? "text-orange-500" : "text-red-500"}`}
              >Home
          </NavLink>
          
          <NavLink to="/About" 
            className={({isActive}) => 
                    `text-white hover:text-gray-300 ${isActive ? "text-orange-500" : "text-red-500"}`}
                     >About
          </NavLink>
          <NavLink to="/Contact" 
            className={({isActive}) => `text-white hover:text-gray-300 ${isActive ? "text-orange-500" : "text-red-500"}`}>
                  Contact
          </NavLink>
          <a href="#" className="text-white hover:text-gray-300">Achievements</a>
        </nav>
     
    </header>

  );
};

export default Header;
