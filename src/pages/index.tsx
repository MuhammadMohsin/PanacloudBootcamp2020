import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import "./style.css";
import Card from '../components/card';

const GET_BOOKMARKS = gql`
{
    bookmarks {
        id
        url
        title
    }
}
`;

const ADD_BOOKMARK = gql`
    mutation addBookmar($url: String!, $title: String!){
        addBookmark(url: $url, title: $title){
            id
        }
    }
`

export default function Home() {

    let titleField;
    let urlField;

    const { error, loading, data } = useQuery(GET_BOOKMARKS);
    const [addBookmark] = useMutation(ADD_BOOKMARK);
    const handleSubmit = () => {
        console.log(titleField.value)
        console.log(urlField.value)
        addBookmark({
            variables: {
                url: urlField.value,
                title: titleField.value
            },
            refetchQueries: [{ query: GET_BOOKMARKS }]
        })
    }

    if (error)
        return <h3>{error}</h3>

    if (loading)
        return <h3>Loading..</h3>

    return <div className="container">

        <h2>Add New Bookmark</h2>
        <label>
            Enter Bookmark Tite: <br />
            <input type="text" ref={node => titleField = node} />
        </label>

        <br />
        <label>
            Enter Bookmark Url: <br />
            <input type="text" ref={node => urlField = node} />
        </label>

        <br />
        <br />
        <button onClick={handleSubmit}>Add Bookmark</button>

        <h2>My Bookmark List</h2>
        {/* {JSON.stringify(data.bookmarks)} */}

        <div className="card-container">
            {data.bookmarks.map((bm) => <Card url={bm.url} title={bm.title} />)}
        </div>

    </div>
}