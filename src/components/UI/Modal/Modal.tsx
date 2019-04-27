import React, { Fragment } from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-180vh)',
          opacity: props.show ? 1 : 0,
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;