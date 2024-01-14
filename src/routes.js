import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Confirmation from "./pages/Confirmation";
import Layout from "./components/Layout";
import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import AuthPages from "./Utils/AuthPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
		errorElement: <ErrorPage/>,
    children: [
		{
			index: true,
			element: <Homepage />,
		},
		{
			element: <About />,
			path: "/about",
		},
		{
			element: <AuthPages/>,
			children: [
				{
					element: <order/>,
					path: "/order"
				},
				{
					element: <BookingPage/>,
					path: '/reservation'
				},{
					element: <Confirmation/>,
					path: "/confirmation"
				}
			]
		},
		{
			element: <Login/>,
			path: '/login',
		}
		],
  },
]);

export default router;