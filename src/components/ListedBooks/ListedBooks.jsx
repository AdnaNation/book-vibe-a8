import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div>
        {/* Tabs */}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden justify-center md:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
