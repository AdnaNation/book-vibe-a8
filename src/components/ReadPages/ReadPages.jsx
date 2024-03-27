import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";

import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

const colors = scaleOrdinal(schemeCategory10).range();

const ReadPages = () => {
  const books = useLoaderData();
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {
      const booksListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          booksListed.push(book);
        }
      }

      setDisplayBooks(booksListed);
    }
  }, [books]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-3">
      <div className="  hidden md:block">
        <BarChart
          className="w-screen  bg-slate-200 mx-auto"
          width={800}
          height={700}
          data={displayBooks}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookShort" />
          <YAxis dataKey="totalPages" />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {displayBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="  bg-slate-200 md:hidden">
        <BarChart
          width={425}
          height={700}
          data={displayBooks}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookShort" />
          <YAxis dataKey="totalPages" />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {displayBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

ReadPages.propTypes = {
  fill: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
};
export default ReadPages;
