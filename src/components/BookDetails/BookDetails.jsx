import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBook } from "../../utility/localstorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((book) => book.bookId == bookId);

  const idInt = parseInt(bookId);

  const handleRead = () => {
    saveReadBook(idInt);
    toast("You have read the book");
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img className="h-[500px] w-[400px]" src={book.image} />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{book.bookName}</h1>
          <p className="py-6 text-[#131313CC] font-semibold">
            By: {book.author}
          </p>
          <hr />
          <p className="text-2xl text-[#131313CC] font-semibold">
            {book.category}
          </p>
          <hr />
          <p className="text-[#131313CC] font-semibold">
            <span className="text-black font-bold">Review:</span> {book.review}
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

          <div className="overflow-x-auto">
            <table className="table w-96">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages:</td>
                  <td className="text-black font-semibold">
                    {book.totalPages}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher:</td>
                  <td className="text-black font-semibold">{book.publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="text-black font-semibold">
                    {book.yearOfPublishing}
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Rating:</td>
                  <td className="text-black font-semibold">{book.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleRead}
              className="btn border-[#1313134D] mr-4"
            >
              Read
            </button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
