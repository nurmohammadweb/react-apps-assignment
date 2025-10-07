import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";

 const router = createBrowserRouter([
  {
    path: "/",
     Component: MainLayout, 
     children: [
       {
        index: true,
         path: "/",
        Component : Home
       },
        {
       path: "/products",
       Component : Products
      }
    ]
   },
  
 
   
   
 ]);

export default router;