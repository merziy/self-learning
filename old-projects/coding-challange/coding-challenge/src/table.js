import React from 'react'
import JsonAPI from './json-fetch'

  function jsonTable() {
    const displayData=JsonAPI.map(
      (data)=> {
        return(
          <tr>
            <td>{data.userId}</td>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.completed}</td>
          </tr>
        )
      }
    )

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData}
                </tbody>
            </table>
        </div>
    )
  }

  export default jsonTable;