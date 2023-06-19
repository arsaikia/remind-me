import React  from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsDone } from '../actions/actions';
import { useCollapse } from 'react-collapsed';
import { useCookies } from 'react-cookie';

const Tab = ({ data, group, isRecap, userId, isOpen, tabCookie }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['openTab']);


    // To collapse a section
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse( { isExpanded: isOpen } );

    const dispatch = useDispatch();
    const markAsDoneHandler = (questionId) => {
        if (userId === 'guest') {
            return alert('Sign in to save progress');
        }
        dispatch(markQuestionAsDone({userId, questionId}));
    };

    
    if (!data.length) {
        return <p>
            🔥🔥🔥
        </p>;
    }

    return (
    <div style={{padding: '4px 0px', width: '100%'}}>
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
                <th>Solved Count</th>
                <th>Last Interaction</th>
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
                            <td style={{ textAlign: 'left'}}>
                                <a href={`https://leetcode.com/problems/${link}`}target="_blank" rel="noopener noreferrer">{name}</a>
                                <span style={{ marginLeft: '0.8rem', padding: '0.15rem 0.4rem', background: difficulty === 'Easy' ? 'lightseagreen' : difficulty === 'Medium' ? '#d5adcf' : 'indianred', borderRadius: '4px', color: 'white',  }}>{ difficulty }</span>
                            </td>
                            <td>{solveCount}</td>
                            <td>{lastUpdatedAt}</td>
                            <td >
                                {solveCount === 0 && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                {(solveCount > 0 && isRecap) && <button className="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                {(solveCount > 0 && !isRecap) && <span>{ solveCount > 5 ? '🔥🔥🔥' : solveCount > 3 ? '🔥🔥' : '🔥'}</span>}
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