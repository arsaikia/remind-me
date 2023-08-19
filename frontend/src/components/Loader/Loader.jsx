import React from 'react'
import './styles.css'

const Loader = (show) => {
  if (!show) {
    return null;
  }
  return (
    <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader