import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/ErrorPage/Error";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import IndustryDetails from "../Components/IndustryDetails/IndustryDetails";

const router = createBrowserRouter([
    {
      path:'/',
      errorElement: <Error></Error>,
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch('data.json')
        },
        {
          path: '/industry/:id',
          element: <IndustryDetails></IndustryDetails>,
          loader: ()=> fetch('/data.json')
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