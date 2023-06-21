import React from 'react'
import DifficultyDot from './DifficultyDot';
import DifficultyBadge from './DifficultyBadge';
import { CenteredFlex, Flex, UnstyledLink } from '../../styles';
import { useWindowSize } from '@uidotdev/usehooks';
import { Tooltip } from 'react-tooltip';

const TabRow = (props) => {
  const {
    _id,
    difficulty,
    isRecap,
    lastUpdatedAt,
    link,
    markAsDoneHandler,
    name,
    solveCount,
  } = props;

  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      <tr key={_id}>
        <td style={{ textAlign: 'left' }}>
          <Flex alignItems="center">
            <DifficultyDot text={difficulty} id={_id} />
            <UnstyledLink
              href={`https://leetcode.com/problems/${link}`}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id={link}
            >
              {name}
            </UnstyledLink>
          </Flex>
          {/* Go to leetcode tooltip */}
          <Tooltip
            id={link}
            className='tooltip-z-idx'
            place="bottom"
            // variant={ }
            content={" ⭐ Go to leetcode ⭐ "}
          />

          {/* <DifficultyBadge text={difficulty} /> */}
        </td>
        {!isMobile && <td>{solveCount}</td>}
        {!isMobile && <td>{lastUpdatedAt}</td>}
        <td >
          {solveCount === 0 && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
          {(solveCount > 0 && isRecap) && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
          {(solveCount > 0 && !isRecap) && <span>{solveCount > 5 ? '🔥🔥🔥' : solveCount > 3 ? '🔥🔥' : '🔥'}</span>}
        </td>
      </tr>
    </>
  )
}

export default TabRow