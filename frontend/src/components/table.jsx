import React from 'react'

const Tab = ({data}) => {

    return (
    <table>
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
                            <td>{name}</td>
                            <td>{solveCount}</td>
                                <td>
                                    <a href={link}target="_blank" rel="noopener noreferrer">Link</a>
                                </td>
                            <td>{lastUpdatedAt}</td>
                        </tr>
                        )
                    }
                })
            }
    </table>
  )
}

export default Tab;