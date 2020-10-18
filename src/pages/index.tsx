import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import "./style.css";

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

    if (error) {
        console.log(error)
        return <h2>Error</h2>
    }

    return (
        <div className="container">
            <label>
                <h1> Add Task </h1> 
                <input type="text" ref={node => {
                    inputText = node;
                }} />
            </label>
            <button onClick={addTask}>Add Task</button>

            <br /> <br />

            <h3>My TODO LIST</h3>

            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> TASK </th>
                        <th> STATUS </th>
                    </tr>
                </thead>
                <tbody>
                    {data.todos.map(todo => {
                        console.log(todo)
                        return <tr key={todo.id}>
                            <td> {todo.id} </td>
                            <td> {todo.task} </td>
                            <td> {todo.status.toString()} </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );

}