import React from 'react'

const Tab = ({ data }) => {
    
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
                        lastUpdatedAt,
                        link,
                        name,
                        solveCount,
                        _id,
                    } = question;
                    
                    {
                        return (
                            <tr key={_id}>
                                <td>
                                    <a href={link}target="_blank" rel="noopener noreferrer">{name}</a>
                                </td>
                                <td>{solveCount}</td>
                                <td>{lastUpdatedAt}</td>
                                <td>
                                    <button type="submit">
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