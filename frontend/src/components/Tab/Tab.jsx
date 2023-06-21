import React from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsDone } from '../../actions/actions';
import { useCollapse } from 'react-collapsed';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from "@uidotdev/usehooks";
import DifficultyBadge from './DifficultyBadge';
import DifficultyDot from './DifficultyDot';
import { UnstyledLink } from '../../styles';

const Tab = (props) => {

    const { width, height } = useWindowSize();
    const isMobile = width < 768;

    console.log(isMobile);

    const { data, group, isRecap, userId, isOpen, tabCookie } = props;

    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['openTab']);

    // To collapse a section
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: isOpen });

    const dispatch = useDispatch();
    const markAsDoneHandler = (questionId) => {
        if (userId === 'guest') {
            alert('Sign in to save progress');
            return navigate('/login');
        }
        dispatch(markQuestionAsDone({ userId, questionId }));
    };

    if (!data.length) {
        return <div>
            <p>🔥🔥🔥</p>
            <p>You have solved all questions for today!</p>
            <button className="button-6" onClick={() => navigate('/all')}>See all questions</button>
        </div>;
    }

    return (
        <div style={{ padding: '4px 0px', width: '100%' }}>
            {group && (
                <button
                    {...getToggleProps({ onClick: () => (tabCookie !== group) ? setCookie('openTab', group, { path: '/' }) : setCookie('openTab', null, { path: '/' }) })}
                    className="button-6"
                >
                    {(isExpanded) ? `${group} 🔼` : `${group} 🔽`}
                </button>
            )}
            <section {...getCollapseProps()}>
                <table>
                    <thead>
                        <tr>
                            <th>Problem</th>
                            {!isMobile && <th>Solved Count</th>}
                            {!isMobile && <th>Last Interaction</th>}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((question) => {
                                const {
                                    _id,
                                    lastUpdatedAt,
                                    link,
                                    name,
                                    solveCount,
                                    difficulty,
                                } = question;

                                {
                                    return (
                                        <tr key={_id}>
                                            <td style={{ textAlign: 'left' }}>
                                                <DifficultyDot text={difficulty} />
                                                <UnstyledLink href={`https://leetcode.com/problems/${link}`} target="_blank" rel="noopener noreferrer">{name}</UnstyledLink>
                                                <DifficultyBadge text={difficulty} />
                                            </td>
                                            {!isMobile && <td>{solveCount}</td>}
                                            {!isMobile && <td>{lastUpdatedAt}</td>}
                                            <td >
                                                {solveCount === 0 && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                                {(solveCount > 0 && isRecap) && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                                {(solveCount > 0 && !isRecap) && <span>{solveCount > 5 ? '🔥🔥🔥' : solveCount > 3 ? '🔥🔥' : '🔥'}</span>}
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}

export default Tab;