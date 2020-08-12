import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id,
      name,
      email,
      age
    }
  }
`;

function Students() {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>

    const { students } = data;

    return (
        <div>
            <h1>Student List</h1>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (<tr key={std.id}>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Students;
