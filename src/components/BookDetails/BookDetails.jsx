import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((book) => book.bookId == bookId);

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className="h-[500px] w-[400px]" src={book.image} />
        <div>
          <h1 className="text-5xl font-bold">{book.bookName}</h1>
          <p className="py-6">By: {book.author}</p>
          <hr />
          <p>{book.category}</p>
          <hr />
          <p>
            <span>Review:</span> {book.review}
          </p>
          <p>
            <span>Tag </span>
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

          <div className="w-[300px]">
            <p className=" flex">
              <span className="flex-grow">Number of Pages: </span>
              <span className="text-left">{book.totalPages}</span>
            </p>
            <p className=" flex">
              <span className="flex-grow">Publisher: </span>{" "}
              <span>{book.publisher}</span>
            </p>
            <p className=" flex">
              <span className="flex-grow">Year of Publishing: </span>
              <span>{book.yearOfPublishing}</span>
            </p>
            <p className=" flex">
              <span className="flex-grow">Rating: </span>{" "}
              <span>{book.rating}</span>
            </p>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
