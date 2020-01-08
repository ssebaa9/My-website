import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {

  return (
    <ul className="navigation-items">
      <NavigationItem class="navigation-item__link" route="/" exact>Home</NavigationItem>
      <NavigationItem class="navigation-item__link" route="/cv">CV</NavigationItem>
      <NavigationItem class="navigation-item__link" route="/projects">Projects</NavigationItem>
      <NavigationItem class="navigation-item__link" route="/contact">Contact</NavigationItem>
    </ul>
  );
}

export default navigationItems;