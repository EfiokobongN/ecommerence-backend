import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import './App.css'
import DefaultLayout from "./Components/DefaultLayout";
import Users from "./views/users";
import GuestLayout from "./Components/GuestLayout";

const router = createBrowserRouter([

    {
        path : '/',
        element: <DefaultLayout/>,
        children: [
            {
                path : '/users',
                element: <Users/>
            },
        ]
    },
    

    {
        path : '/',
        element: <GuestLayout/>,
        children: [
            {
                path : '/login',
                element: <Login/>
            },

            {
                path : '/register',
                element: <Register/>
            }
        ]
    },
    
   
])


export default router;