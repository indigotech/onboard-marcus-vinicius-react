import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { UserList } from "../pages/home";
import { useLocalStorage } from "../hooks/use-local-storage";
import { AddUserForm } from "../pages/register"

export const Router = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<AuthGuard><Home /></AuthGuard>} />
        <Route path="/register" element={<AuthGuard><AddUserForm /></AuthGuard>} />
        <Route path="*" element={<AuthGuard><Navigate to={"/home"} replace /></AuthGuard>} />
    </Routes>
);

const AuthGuard: React.FC<React.PropsWithChildren> = (props) => {
    const { auth } = useLocalStorage();

    if (!auth) {
        return <Navigate to={"/login"} replace />
    };

    return <>{props.children}</>;
};

const Home = () => {
    return (
        <UserList />
    );
};