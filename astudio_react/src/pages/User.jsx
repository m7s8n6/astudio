import React, { useState } from "react";
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
          filterComponents={
            <div className="flex items-center gap-2">
              <select
                value={filter.name != "firstName" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("firstName", e.target.value);
                  setFilter({ name: "firstName", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Name</option>
                {originalData.map((user) => (
                  <option key={user?.firstName} value={user?.firstName}>
                    {user?.firstName}
                  </option>
                ))}
              </select>

              <div className="w-px mx-2 h-5 bg-gray-400" />

              <select
                value={filter.name != "email" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("email", e.target.value);
                  setFilter({ name: "email", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Email</option>
                {originalData.map((user, index) => (
                  <option key={index} value={user?.email}>
                    {user?.email}
                  </option>
                ))}
              </select>

              <div className="w-px mx-2 h-5 bg-gray-400" />

              <select
                value={filter.name != "birthDate" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("birthDate", e.target.value);
                  setFilter({ name: "birthDate", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">BirthDate</option>
                {originalData.map((user, index) => (
                  <option key={index} value={user?.birthDate}>
                    {user?.birthDate}
                  </option>
                ))}
              </select>

              <div className="w-px mx-2 h-5 bg-gray-400" />

              <select
                value={filter.name != "gender" ? "" : filter.value}
                onChange={(e) => {
                  filterDataByKeyValue("gender", e.target.value);
                  setFilter({ name: "gender", value: e.target.value });
                }}
                className="px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
