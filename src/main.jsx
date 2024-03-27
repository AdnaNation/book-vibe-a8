import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import ReadBooks from "./components/ReadBooks/ReadBooks";
import ReadPages from "./components/ReadPages/ReadPages";
import Root from "./components/Root/Root";
import WishList from "./components/WishList/WishList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../books.json"),

        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("../books.json"),
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/pages",
        element: <ReadPages></ReadPages>,
        loader: () => fetch("../books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
