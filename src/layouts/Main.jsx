import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* Navbar part */}
            <div className="min-h-[calc(100vh-68px)] ">
                <Outlet />
            </div>
            {/* Footer part */}
        </div>
    );
};

export default Main;