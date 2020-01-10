import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {

  const { isOpen } = props

  return (
    <div className={isOpen ? "side-drawer open" : "side-drawer close"} onClick={props.openMenuHandler}>
      <nav className="side-drawer__container">
        <NavigationItems />
      </nav>
    </div>);
}

export default SideDrawer;