import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import { DataProvider } from "./context/DataContext";
import Product from "./pages/Products";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="users" element={<User />} />
        <Route path="products" element={<Product />} />
        {/* <Route path="user" element={<About />} /> */}
        {/* <Route path="pages" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
              routes for. */}
      </Routes>
    </>
  );
}

export default App;
