import React, { Component } from 'react';
import NavigationPannel from '../../Navigation/NavigationPannel/NavigationPannel';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Footer from '../../Footer/Footer';


class Layout extends Component {
  state = {
    isOpen: false
  }

  openMenuHandler = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <div className="layout">
        <BackDrop isOpen={this.state.isOpen} openMenuHandler={this.openMenuHandler} />
        <SideDrawer isOpen={this.state.isOpen} openMenuHandler={this.openMenuHandler} />
        <div className="layout__menu">
          <NavigationPannel isOpen={this.state.isOpen} openMenuHandler={this.openMenuHandler} />
        </div>
        <main className="layout__content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;