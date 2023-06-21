import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react'

const DifficultyDot = (props) => {
  const { text } = props;

  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  if (isMobile) {
    return <div style={{ display: 'inline-block', marginRight: '10px', width: "6px", height: "6px", borderRadius: "50%", background: text === 'Easy' ? 'lightseagreen' : text === 'Medium' ? '#6a5acd' : 'indianred', }} ></div>;
  }
}

export default DifficultyDot;
