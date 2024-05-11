import React from "react";
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
  const {
    data,
    pageSize,
    currentPage,
    searchQuery,
    filters,
    handlePageSizeChange,
    handleSearchQueryChange,
    handleFilterChange,
    handlePaginationChange,
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
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
