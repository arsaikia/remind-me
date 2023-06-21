import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react'

const DifficultyBadge = (props) => {
  const { text } = props;

  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  if (isMobile) {
    return null;
  }

  return (
    <span style={
      {
        marginLeft: '0.8rem',
        padding: '0.15rem 0.4rem',
        background: text === 'Easy' ? 'lightseagreen' : text === 'Medium' ? '#d5adcf' : 'indianred',
        borderRadius: '4px', color: 'white',
      }
    }>
      {text}
    </span>
  )
}

export default DifficultyBadge