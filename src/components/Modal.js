import React, { useState } from 'react';

import Typography from './Typography';

const styles = {
  modal: {
    background: 'white',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: '5% 20%',
    padding: 20,
    borderRadius: 2,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

  },
  image: {
    height: 280,
    padding: '15px 0px',
    overflow: 'hidden',
  },
  closeIcon: {
    cursor: 'pointer',
    textAlign: 'right',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  details: {
    maxHeight: 95,
    overflow: 'auto',
    margin: '10px 0',
  }
}

export default function Modal(props) {
  return (
      <div style={styles.modal}>
        <div style={styles.closeIcon} onClick={props.closeModal}>X</div>
        <div style={styles.image}><img src={props.imageUrl} alt={''}/></div>
        <Typography variant="body">{props.title}</Typography>
        <div style={styles.details}>{props.details}</div>
        <p>{props.genres}</p>
      </div>
  );
}

