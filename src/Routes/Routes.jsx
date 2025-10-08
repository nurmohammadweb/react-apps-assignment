import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps"; 
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

 const router = createBrowserRouter([
  {
    path: "/",
     Component: MainLayout, 
     errorElement:ErrorPage,
     children: [
       {
        index: true,
         path: "/",
        Component : Home,
       },
        {
        path: "/products",
        Component : Products,
       },
        {
         path: '/apps',
         Component:Apps,
     
      }, 
        {
         path: '/installation',
         Component:Installation,
     
      }, 
        {
         path: '/appdetails',
         Component:AppDetails,
     
      }, 
    ]
   },
  //  {
  //    path: '*',
  //    Component:ErrorPage,
     
  //  },
   
 ]);

export default router;