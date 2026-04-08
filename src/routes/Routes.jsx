import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Blog from "../pages/Blog";
import GetInTouch from "../pages/GetInTouch";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            }, 
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/getInTouch',
                element: <GetInTouch/>
            }
        ]
    },
]);