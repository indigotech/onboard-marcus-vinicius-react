import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { App } from "../app";
import { useLocalStorage } from "../hooks/use-local-storage";

export const Router = () => {
    const { auth: token } = useLocalStorage();
    console.log(token);

    return (
        <Routes>
            <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />
            <Route path="/login" element={token ?<Navigate to="/home" replace/> : <App />} />
            <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
        </Routes>
    );
};

const Home = () => {
    return (
        <h1>
            ALOOOOO
        </h1>
    )
}
