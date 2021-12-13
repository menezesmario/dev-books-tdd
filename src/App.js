import { Typography } from "@material-ui/core";
import React from 'react';
import { BookListContainer } from "./components/BookListContainer";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        DevBook!
      </Typography>
      <BookListContainer />
    </>
  );
}

export default App;
