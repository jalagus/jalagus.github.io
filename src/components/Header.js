import React from 'react';

function Header({ setActiveMenu, activeMenu }) {
  const menuItems = ['Home', 'Experience', 'Projects', 'Publications'];
  
  return (
    <div className="header">
      <div className="headerTitle">
        <div className="bigTitle">lagus.ai</div>
        <div className="subTitle">Machine learning consulting</div>
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item} className={activeMenu === item ? "selectedPage" : ""} onClick={() => setActiveMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;