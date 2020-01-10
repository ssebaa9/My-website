import React from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

const NavigationItem = (props) => {

  const scrollToTopHandler = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }

  return (
    <li className="navigation-item">
      <NavLink onClick={scrollToTopHandler} className={props.class} to={props.route} exact={props.exact}>{props.children}</NavLink>
    </li>
  );
}

export default NavigationItem;