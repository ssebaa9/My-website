import React from 'react';

const backDrop = (props) => {
  let classOpen = "back-drop"
  if (props.isOpen) classOpen = "back-drop open"

  return (
    <div onClick={props.openMenuHandler} className={classOpen}></div>
  );
}

export default backDrop;