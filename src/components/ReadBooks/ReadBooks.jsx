import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
const ReadBooks = () => {
  const books = useLoaderData();

  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {
      const booksListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);
        // console.log(book);
        if (book) {
          booksListed.push(book);
        }
      }

      setDisplayBooks(booksListed);
    }
  }, [books]);

  return (
    <div>
      {displayBooks.map((book) => (
        <div key={book.bookId} className="hero  bg-base-200 mt-2">
          <div className="hero-content flex-col lg:flex-row gap-12 md:w-[700px]">
            <img className="h-[200px] w-[150px]" src={book.image} />
            <div className="flex-grow">
              <h1 className="text-3xl font-bold">{book.bookName}</h1>
              <p className=" text-[#131313CC] font-semibold">
                By: {book.author}
              </p>

              <p className="text-2xl text-[#131313CC] font-semibold">
                {book.category}
              </p>

              <p>
                <span className="text-black font-bold">Tag </span>
                {book.tags.map((tag) => (
                  <a
                    className="text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-md mr-3"
                    key={tag.idx}
                  >
                    #{tag}
                  </a>
                ))}
              </p>
              <hr />

              <div className="flex justify-center md:justify-start">
                <button className="btn border-[#1313134D] mr-4">Read</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
