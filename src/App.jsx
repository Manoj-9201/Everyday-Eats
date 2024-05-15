import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainComponent from "./components/MainComponent";
import { Suspense, lazy } from "react";
import Admin from "./pages/Admin/Admin";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";

export default function App() {
  const Cart = lazy(() => import("./pages/Cart/Cart"));
  const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <MainComponent /> },
        { path: "/menu", element: <Menu /> },
        { path: "/footer", element: <Footer /> },
        { path: "/search", element: <Search /> },
        {
          path: "/cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: (
            <Suspense>
              <Checkout />{" "}
            </Suspense>
          ),
        },
      ],
    },
    // { path: "/admin", element: <Admin /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
