import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Components/CheckOut/CheckOut";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Orders from "../Components/Orders/Orders";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/orders', element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: '/checkout/:id', element: <PrivateRoute> <CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]

    },
])