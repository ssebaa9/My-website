import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className="navigation-item">
      <NavLink className={props.class} to={props.route} exact={props.exact}>{props.children}</NavLink>
    </li>
  );
}

export default NavigationItem;