import React from "react";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Navigate } from "react-router-dom";

export const App = () => {
    const { auth } = useLocalStorage();
    const [emailData, setEmailData] = React.useState("");
    const [passwordData, setPasswordData] = React.useState("");
    const [inputErrorEmail, setInputErrorEmail] = React.useState(false);
    const [inputErrorPassword, setInputErrorPassword] = React.useState(false);

    if (auth) {
        return <Navigate to="/home" replace />;
    }

    return (
        <>
            <h1>Bem-vindo(a) à Taqtile!</h1>

            <EmailInput setData={setEmailData}
                onError={setInputErrorEmail}
                emailData={emailData} error={inputErrorEmail} />

            <PasswordInput setData={setPasswordData}
                onError={setInputErrorPassword} passwordData={passwordData} 
                error={inputErrorPassword} />
                
            <SubmitButton inputsData={{
                email: emailData,
                password: passwordData
            }} inputError={{
                email: inputErrorEmail, password: inputErrorPassword
            }}/>
        </>
    );
};