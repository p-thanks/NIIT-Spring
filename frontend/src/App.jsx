import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./components/PoductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      <Toaster position="top-right" />
    </>
  );
}

export default App;
