import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router
