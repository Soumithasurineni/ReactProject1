import Header from "./Header";
import AboutUs from "./AboutUs";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Route,Outlet } from "react-router-dom";
import RestaurantComponent from "./RestaurantComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />  {/* Header component */}
        <Outlet /> {/* Outlet for nested routes */}
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
