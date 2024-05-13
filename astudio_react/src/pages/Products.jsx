import React, { useState } from "react";
import { DataProvider, useUserData } from "../context/DataContext";
import Table from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";

const User = () => {
  return (
    <>
      <DataProvider page="products">
        <BreadCrumb
          data={[
            { title: "Home", link: "/" },
            { title: "Products", link: "/products" },
          ]}
        />
        <ProductTableData />
      </DataProvider>
    </>
  );
};

export default User;

const ProductTableData = () => {
  const [filter, setFilter] = useState({ value: "", name: "" });
  const {
    data,
    pageSize,
    currentPage,
    searchQuery,
    originalData,
    filters,
    handlePageSizeChange,
    handleSearchQueryChange,
    handleFilterChange,
    handlePaginationChange,
    filterDataByKeyValue,
  } = useUserData();

  const columns = [
    { key: "id", title: "ID" },
    { key: "title", title: "Tittle" },
    { key: "description", title: "Description" },
    { key: "price", title: "Price" },
    { key: "discountPercentage", title: "Discount Percentage" },
    { key: "rating", title: "Rating" },
    { key: "stock", title: "Stock" },
    { key: "brand", title: "Brand" },
    { key: "category", title: "Category" },
  ];
  return (
    <div className="text-lg font-bold">
      {data?.products ? (
        <Table
          data={data?.products}
          total={data?.total}
          columns={columns}
          pageSize={pageSize}
          currentPage={currentPage}
          searchQuery={searchQuery}
          handlePageSizeChange={handlePageSizeChange}
          handlePaginationChange={handlePaginationChange}
          handleSearchQueryChange={handleSearchQueryChange}
          filterComponents={
            <div className="flex items-center gap-2">
              <select
                value={filter.name != "title" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("title", e.target.value);
                  setFilter({ name: "title", value: e.target.value });
                  // setFilter1(e.target.value);
                  // handleFilterChange("filter1", e.target.value);
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Title</option>
                {originalData.map((product) => (
                  <option key={product?.title} value={product?.title}>
                    {product?.title}
                  </option>
                ))}
              </select>

              <div className="w-px mx-2 h-5 bg-gray-400" />

              <select
                value={filter.name != "brand" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("brand", e.target.value);
                  setFilter({ name: "brand", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Brand</option>
                {originalData.map((product, index) => (
                  <option key={index} value={product?.brand}>
                    {product?.brand}
                  </option>
                ))}
              </select>

              <div className="w-px mx-2 h-5 bg-gray-400" />

              <select
                value={filter.name != "category" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("category", e.target.value);
                  setFilter({ name: "category", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Category</option>
                {originalData.map((product, index) => (
                  <option key={index} value={product?.category}>
                    {product?.category}
                  </option>
                ))}
              </select>
            </div>
          }
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
