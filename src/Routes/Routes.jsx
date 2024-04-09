import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/ErrorPage/Error";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
      path:'/',
      errorElement: <Error></Error>,
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        }
      ]
    },
  ]);

  export default router;