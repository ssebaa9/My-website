import React from 'react';

const backDrop = (props) => {

  return (
    <div onClick={props.openMenuHandler} className={props.isOpen ? 'back-drop open' : 'back-drop'}></div>
  );
}

export default backDrop;