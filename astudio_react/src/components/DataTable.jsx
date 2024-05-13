import { Pagination } from "@mui/material";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useRef, useState } from "react";

const Table = ({
  data,
  columns,
  pageSize,
  currentPage,
  total,
  searchQuery,
  handlePageSizeChange,
  handlePaginationChange,
  handleSearchQueryChange,
  filterComponents,
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const InputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const setInput = () => {
    setShowInput(true);
    if (InputRef.current) {
      InputRef.current.focus();
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex items-center gap-2 mb-4">
        <select
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
          className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
        >
          {[5, 10, 15, 20].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="mx-2 py-2">Entries</span>

        <div className="w-px mx-2 h-5 bg-gray-400" />
        <div>
          {showInput ? (
            <input
              ref={InputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onBlur={() => setShowInput(false)}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              className="w-full px-4 py-2 text-md rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          ) : (
            <button onClick={setInput} className="border p-2 rounded-md">
              <MagnifyingGlassIcon scale={5} />
            </button>
          )}
        </div>
        {filterComponents ? (
          filterComponents
        ) : (
          <div className="w-px mx-2 h-5 bg-gray-400" />
        )}
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 border whitespace-nowrap border-gray-300 bg-[#c0e3e5]"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-[#ebebeb]">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-2 border border-gray-300 capitalize font-normal"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            handlePaginationChange((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          Previous
        </button>
        <span>
          <Pagination
            className="mt-2"
            color="secondary"
            count={totalPages}
            page={currentPage}
            onChange={(e, pageNumber) =>
              handlePaginationChange((prevPage) => pageNumber)
            }
            variant="outlined"
            shape="rounded"
          />
        </span>

        <button
          onClick={() => {
            handlePaginationChange((prevPage) =>
              Math.min(prevPage + 1, totalPages)
            );
          }}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
