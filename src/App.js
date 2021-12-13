import { Typography } from "@material-ui/core";
import React from 'react';

function App() {
  const books = [
    { name: 'Refactoring' },
    { name: 'Domain-driven design' }
  ];



  return (
    <>
     <Typography variant="h2" component="h2" data-test="heading">DevBook!</Typography>
      <div data-test="book-list">
        {
          books.map(book => (
            <div className="book-item">
              <h2 className="titles">{book.name}</h2>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
