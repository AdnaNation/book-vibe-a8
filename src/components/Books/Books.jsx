import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2>Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {books.map((book) => (
          <div key={book.bookId} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body  ">
              <div className="flex gap-4">
                {book.tags.map((tag) => (
                  <a
                    className="text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-md"
                    key={tag.idx}
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <h2 className="card-title">{book.bookName}</h2>
              <p>By: {book.author}</p>
              <hr className="border-dashed" />
              <div className="flex justify-between gap-16 w-full">
                <p>{book.category}</p>
                <p className="flex items-center gap-2">
                  {book.rating} <span>{<CiStar></CiStar>}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
