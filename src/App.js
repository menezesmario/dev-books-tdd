import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { BookList } from "./components/BookList";
import { api } from "./services/api";

function App() {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState([false])
  const [error, setError] = useState([false])
 
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await api.get('books')
        setBooks(response.data)
      } catch (err) {
        setError(true)
      }finally {
        setLoading(false)
      }
    } 
    fetchBooks()
  }, [])

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">DevBook!</Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
