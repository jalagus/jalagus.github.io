import React from 'react';

function Header({ setActiveMenu }) {
  const menuItems = ['Home', 'Education', 'Projects', 'Publications', 'Contact'];
  
  return (
    <div className="header">
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item} onClick={() => setActiveMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;