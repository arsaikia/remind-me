import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react';
import { Tooltip } from "react-tooltip";
import { CenteredFlex } from '../../styles';


const DifficultyDot = (props) => {
  const { id, text } = props;

  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  if (isMobile) {
    return <div style={{ display: 'inline-block', marginRight: '10px', width: "6px", height: "6px", borderRadius: "50%", background: text === 'Easy' ? 'lightseagreen' : text === 'Medium' ? '#6a5acd' : 'indianred', }} ></div>;
  }

  return <>
    <CenteredFlex data-tooltip-id={id} style={{ cursor: 'pointer', marginRight: '10px', width: "0.8em", height: "0.8em", borderRadius: "50%", border: `0.2em solid ${text === 'Easy' ? 'lightseagreen' : text === 'Medium' ? '#6a5acd' : 'indianred'}` }} >
      <div style={{ width: "0.45em", height: "0.45em", borderRadius: "50%", background: text === 'Easy' ? 'lightseagreen' : text === 'Medium' ? '#6a5acd' : 'indianred' }} >
      </div>
    </CenteredFlex>
    <Tooltip
      id={id}
      className='tooltip-z-idx'
      place="top"
      variant={text === 'Easy' ? 'success' : text === 'Medium' ? 'warning' : 'error'}
      content={text}
    />
  </>
}

export default DifficultyDot;
