import React from 'react';

const Toolbar = (props) => {
  let classOpen = "toolbar__elem"
  if (props.isOpen) classOpen = "toolbar__elem open"


  return (
    <div className="toolbar" onClick={props.openMenuHandler}>
      <span className={classOpen}></span>
      <span className={classOpen}></span>
      <span className={classOpen}></span>
    </div>
  );
}

export default Toolbar;