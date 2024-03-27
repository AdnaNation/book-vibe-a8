import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {
      const booksListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);
        console.log(book);
        if (book) {
          booksListed.push(book);
        }
      }
      setReadBooks(booksListed);
      setDisplayBooks(booksListed);
    }
  }, [books]);
  return (
    <div>
      {books.map((book) => (
        <h2 key={book.bookId}>{book.bookName}</h2>
      ))}
    </div>
  );
};

export default ListedBooks;
