import React from "react";
import { DataProvider, useUserData } from "../context/DataContext";
import Table from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";

const User = () => {
  return (
    <>
      <DataProvider page="users">
        <BreadCrumb
          data={[
            { title: "Home", link: "/" },
            { title: "Users", link: "/users" },
          ]}
        />
        <UserTableData />
      </DataProvider>
    </>
  );
};

export default User;

const UserTableData = () => {
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
    { key: "firstName", title: "First Name" },
    { key: "lastName", title: "Last Name" },
    { key: "maidenName", title: "Maiden Name" },
    { key: "age", title: "Age" },
    { key: "gender", title: "Gender" },
    { key: "email", title: "Email" },
    { key: "phone", title: "Phone" },
    { key: "username", title: "username" },
    { key: "bloodGroup", title: "Blood Group" },
    { key: "eyeColor", title: "Eye Color" },
    { key: "university", title: "University" },
  ];
  return (
    <div className="text-lg font-bold">
      {data?.users ? (
        <Table
          data={data?.users}
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
