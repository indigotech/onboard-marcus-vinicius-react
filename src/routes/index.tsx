import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { App } from "../app";
import { UserList } from "../app/users-list.page";
import { useLocalStorage } from "../hooks/use-local-storage";
import { AddUserForm } from "../app/add-user.page"

export const Router = () => (
    <Routes>
        <Route path="/login" element={<App />} />
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