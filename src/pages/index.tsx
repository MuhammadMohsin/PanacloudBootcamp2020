import React from "react"
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
{
    todos {
        task,
        id
    }
}
`;

export default function Home() {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  return (
      <div>
          {JSON.stringify(data)}
      </div>
  );
    
}