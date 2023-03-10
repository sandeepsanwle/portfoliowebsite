import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="menu-bar-header" onClick={toggleMenu}>
      <MenuIcon className='menuicon' sx={{ fontSize: 45 }}/>
      </div>
      {showMenu && (
        <ul className="menu-bar">
          <li>
            <Link to="/component1">Component 1</Link>
          </li>
          <li>
            <Link to="/component2">Component 2</Link>
          </li>
          ...
        </ul>
      )}
    </>
  );
};

export default MenuBar;
