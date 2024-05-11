import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ page, children }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  // Function to fetch data from the API
  const fetchData = async () => {
    const response = await axios.get(`https://dummyjson.com/${page}`, {
      params: {
        limit: pageSize,
        skip: (currentPage - 1) * pageSize,
        ...filters,
      },
    });
    setData(response.data);
    setOriginalData(response.data?.[page]);
  };

  useEffect(() => {
    fetchData();
  }, [pageSize, currentPage, filters]);

  const handlePageSizeChange = (val) => {
    setPageSize(parseInt(val));
    setCurrentPage(1); // Reset to first page when page size changes
  };

  const handleSearchQueryChange = (val) => {
    console.log(val);
    setSearchQuery(val);
    const filtered = originalData.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(val)
      )
    );
    setData((pre) => ({ ...pre, [page]: filtered }));
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
    setCurrentPage(1); // Reset to first page when filter applied
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const value = {
    data,
    pageSize,
    currentPage,
    searchQuery,
    filters,
    handlePageSizeChange,
    handleSearchQueryChange,
    handleFilterChange,
    handlePaginationChange,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useUserData = () => useContext(DataContext);

export { DataContext, DataProvider };
