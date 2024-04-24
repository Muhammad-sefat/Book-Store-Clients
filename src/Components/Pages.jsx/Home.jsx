import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";

const Home = () => {
  const loaderBook = useLoaderData();
  const [books, setBooks] = useState(loaderBook);
  return (
    <div className="py-5">
      <h2 className="text-4xl font-bold py-3">This Is Home page</h2>
      <div className="grid grid-cols-2 gap-5">
        {books.map((book) => (
          <SingleBook key={book._id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Home;
