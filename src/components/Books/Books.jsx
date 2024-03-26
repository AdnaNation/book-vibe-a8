import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Books = ({ books }) => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-5">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {books.map((book) => (
          <Link
            to={`/book/${book.bookId}`}
            key={book.bookId}
            className="card  bg-base-100 shadow-xl p-5 border hover:scale-105 hover:border-secondary"
          >
            <figure className="px-5 py-5 bg-[#F3F3F3]">
              <img
                src={book.image}
                alt={book.bookName}
                className="rounded-sm h-52 w-46"
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
          </Link>
        ))}
      </div>
    </div>
  );
};
Books.propTypes = {
  books: PropTypes.array,
};
export default Books;
