import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const App = () => (
  <Query
    query={gql`
      {
        cats{
          id,
          age
        }
        users{
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.cats.map(({ id }) => (
        <div>
          <p>{`${id}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default App;
