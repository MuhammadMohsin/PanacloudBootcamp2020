import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const GET_TODOS = gql`
{
    todos {
        task,
        id,
        status
    }
}
`;
const ADD_TODO = gql`
    mutation addTodo($task: String!){
        addTodo(task: $task){
            task
        }
    }
`

export default function Home() {
    const [todos, setTodos] = useState([{}]);
    let inputText;

    const [addTodo] = useMutation(ADD_TODO);
    const addTask = () => {
        addTodo({
            variables: {
                task: inputText.value
            },
            refetchQueries: [{ query: GET_TODOS }]
        })
        inputText.value = "";
    }

    const { loading, error, data } = useQuery(GET_TODOS);

    if (loading)
        return <h2>Loading..</h2>

    if (error)
        return <h2>Error</h2>

    return (
        <div>
            <label>
                Add Task <br />
                <input type="text" ref={node => {
                    inputText = node;
                }} />
            </label>
            <button onClick={addTask}>Add Task</button>

            <br /> <br />

            {JSON.stringify(data.todos)}

        </div>
    );

}