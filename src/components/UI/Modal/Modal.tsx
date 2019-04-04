import React from 'react';
import classes from './Modal.module.scss';

const modal = props => {
  return (
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-180vh)',
        opacity: props.show ? 1 : 0,
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  );
};

export default modal;
