import React from 'react';
import './styles.css';

function Loader(show) {
  if (!show) {
    return null;
  }
  return (
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader;
