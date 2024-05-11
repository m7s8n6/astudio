import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const Homepage = () => {
  return (
    <div className="container flex justify-evenly">
      <BreadCrumb data={[{ title: "Products", link: "/products" }]} />
      <BreadCrumb data={[{ title: "Users", link: "/users" }]} />
    </div>
  );
};

export default Homepage;
