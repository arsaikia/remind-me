import React from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsDone } from '../actions/actions';
import { useCollapse } from 'react-collapsed'

const Tab = ({ data, group, isOpen, isRecap }) => {
    // To collapse a section
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: isOpen })

    const dispatch = useDispatch();
    const markAsDoneHandler = (id) => dispatch(markQuestionAsDone(id));
    
    if (!data.length) {
        return <p>
            🔥🔥🔥
        </p>;
    }

    return (
    <div style={{padding: '4px 0px', width: '100%'}}>
            {group && (
                <button {...getToggleProps()} class="button-6">
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
                } = question;
                
                {
                    return (
                        <tr key={_id}>
                            <td style={{textAlign: 'left'}}>
                                <a href={`https://leetcode.com/problems/${link}`}target="_blank" rel="noopener noreferrer">{name}</a>
                            </td>
                            <td>{solveCount}</td>
                            <td>{lastUpdatedAt.slice(0, 10)}</td>
                            <td >
                                {solveCount === 0 && <button class="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                {(solveCount > 0 && isRecap) && <button class="button-41" type="submit" onClick={() => markAsDoneHandler(_id)}>Done</button>}
                                {(solveCount > 0 && !isRecap) && <span>🔥🔥🔥</span>}
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