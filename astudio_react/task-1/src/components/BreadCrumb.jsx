import React from "react";

const BreadCrumb = ({ data }) => {
  return (
    <div>
      <ol className="flex items-center whitespace-nowrap m-4">
        {data.map((el, index) => (
          <li className="inline-flex items-center" key={el?.title}>
            <a
              className={`flex items-center text-lg mx-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500 ${
                index == data.length - 1
                  ? "underline decoration-[#fdc936] decoration-4 underline-offset-0"
                  : ""
              }`}
              href={el.link}
            >
              {el.title}
            </a>
            {index == data.length - 1 ? null : (
              <span className="text-2xl"> / </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrumb;
