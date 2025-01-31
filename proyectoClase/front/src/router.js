import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/RegisterTeacher";
import NotFound from "./pages/notFound";
import Login from "./pages/login";

const AppRouter = () => {
    return (
        <Routes>
            {/* Route path="/" element={<Home />} */}
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;