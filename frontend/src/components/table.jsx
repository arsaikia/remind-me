import React from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsDone } from '../actions/actions';


const Tab = ({ data }) => {

    const dispatch = useDispatch();
    const markAsDoneHandler = (id) => dispatch(markQuestionAsDone(id));
    
    if (!data.length) {
        return null;
    }

    return (
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
                                <td>
                                    <a href={`https://leetcode.com/problems/${link}`}target="_blank" rel="noopener noreferrer">{name}</a>
                                </td>
                                <td>{solveCount}</td>
                                <td>{lastUpdatedAt}</td>
                                <td>
                                    <button type="submit" onClick={() => markAsDoneHandler(_id)}>
                                        Mark Complete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                })
                }
            </tbody>
    </table>
  )
}

export default Tab;