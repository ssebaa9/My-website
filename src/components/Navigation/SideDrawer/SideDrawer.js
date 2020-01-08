import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
  let classOpen = "side-drawer close"
  if (props.isOpen) classOpen = "side-drawer open"

  return (
    <div className={classOpen} onClick={props.openMenuHandler}>
      <nav className="side-drawer__container">
        <NavigationItems />
      </nav>
    </div>);
}

export default SideDrawer;