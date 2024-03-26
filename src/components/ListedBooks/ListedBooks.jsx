import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h1>Nothing is listed yet</h1>
    </div>
  );
};

export default ListedBooks;
