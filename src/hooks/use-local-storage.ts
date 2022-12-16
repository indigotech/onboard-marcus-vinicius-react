import React from "react";

const AUTH_TOKEN = "user-session-token";

export const useLocalStorage = () => {
    const [auth, setAuth] = React.useState<string | null>(window.localStorage.getItem(AUTH_TOKEN));


    const updateAuth = React.useCallback((token: string) => {
        window.localStorage.setItem(AUTH_TOKEN, token);
        setAuth(token);
    }, [setAuth]);

    const authMemo = React.useMemo(() => {
        return auth;
    }, [auth, setAuth]);

    return {
        auth: authMemo,
        setAuth: updateAuth
    }
};

