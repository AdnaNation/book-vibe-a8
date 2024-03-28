import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
const ReadBooks = () => {
  const books = useLoaderData();

  const [displayBooks, setDisplayBooks] = useState([]);
  const [listedBooks, setListedBooks] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setDisplayBooks(listedBooks);
    } else if (filter === "science fiction") {
      const fictionBooks = listedBooks.filter(
        (book) => book.category === "Science Fiction"
      );
      setDisplayBooks(fictionBooks);
    } else if (filter === "romance") {
      const romanceBooks = listedBooks.filter(
        (book) => book.category === "Romance"
      );
      setDisplayBooks(romanceBooks);
    }
  };

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
      setListedBooks(booksListed);
    }
  }, [books]);

  return (
    <div>
      <div className="flex justify-center md:justify-end">
        <details className="dropdown">
          <summary className=" btn text-white bg-[#23BE0A]">
            Sort By{" "}
            <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("science fiction")}>
              <a>Science Fiction</a>
            </li>
            <li onClick={() => handleFilter("romance")}>
              <a>Romance</a>
            </li>
          </ul>
        </details>
      </div>
      {displayBooks.map((book) => (
        <div key={book.bookId} className="hero  bg-base-200 mt-2 rounded-xl">
          <div className="hero-content flex-col lg:flex-row gap-12 md:w-[900px]">
            <img className="h-[200px] w-[150px]" src={book.image} />
            <div className="flex-grow space-y-2">
              <h1 className="text-3xl font-bold">{book.bookName}</h1>
              <p className=" text-[#131313CC] font-semibold">
                By: {book.author}
              </p>

              <div className="flex">
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

                <p className="flex items-center gap-1">
                  <CiCalendar></CiCalendar> Year of Publishing:{" "}
                  {book.yearOfPublishing}
                </p>
              </div>
              <div className="flex gap-5">
                <p className="flex items-center gap-1">
                  <FaUserFriends></FaUserFriends> Publisher: {book.publisher}
                </p>
                <p className="flex items-center">
                  <MdOutlineContactPage></MdOutlineContactPage> Page
                  {book.totalPages}
                </p>
              </div>

              <hr />

              <div className="flex gap-3 mt-3">
                <p className="border p-1 rounded-full text-[#328EFF] bg-[#328EFF26]">
                  Category: {book.category}
                </p>
                <p className="border p-1 rounded-full text-[#FFAC33] bg-[#FFAC3326]">
                  Rating: {book.rating}
                </p>
                <button className=" border p-1 rounded-full text-white bg-[#23BE0A]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
