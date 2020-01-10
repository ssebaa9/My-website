import React, { Component } from 'react';
import DrawerToggler from '../DrawerToggler/DrawerToggler';
import NavigationItems from '../NavigationItems/NavigationItems';

class NavigationPannel extends Component {
  state = {}

  render() {

    return (
      <div className="navigation-pannel">
        <div className="navigation-pannel__logo">
          <h3 className="navigation-pannel__logo-name">Sebastian Dębicki</h3>
          <h5 className="navigation-pannel__logo-specialization">Front-end Developer</h5>
        </div>
        <div className="navigation-pannel__bars">
          <DrawerToggler isOpen={this.props.isOpen} openMenuHandler={this.props.openMenuHandler} />
          <nav className="navigation-pannel--desktop-only">
            <NavigationItems />
          </nav>
        </div>
      </div>
    );
  }
}

export default NavigationPannel;