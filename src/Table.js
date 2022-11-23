import React from 'react'

const Table = (props) => {
    return (
        <div><table className="table">
            <thead>
                <tr>
                    <th >#</th>
                    <th >Name</th>
                    <th >Age</th>
                </tr>
            </thead>
            <tbody>

                {props.data.Persons.map((person) => (
                    <tr>
                        <th >1</th>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                    </tr>
                )

                )}
            </tbody>
        </table>
        </div>
    )
}

export default Table