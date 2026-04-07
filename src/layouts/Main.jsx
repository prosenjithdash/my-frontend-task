import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Main = () => {
    return (
        <div className="bg-gray-100">
            {/* Navbar part */}
            <Navbar/>
            <div className="min-h-[calc(100vh-68px)] ">
                <Outlet />
            </div>
            {/* Footer part */}
            <Footer/>
        </div>
    );
};

export default Main;