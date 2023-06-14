import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Piggy from "../Pages/Piggy";

export const mainRouter = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <Piggy />
    }]

}]) 