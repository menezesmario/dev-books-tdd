import { Typography } from "@material-ui/core";
import React from 'react';

function App() {
  return (
    <>
     <Typography variant="h2" component="h2" data-test="heading">DevBook!</Typography>
      <div data-test="book-list">
        <div className="book-item"></div>
        <div className="book-item"></div>
      </div>
    </>
  );
}

export default App;
