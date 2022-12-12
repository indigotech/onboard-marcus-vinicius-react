import { useState } from "react";
import React from "react";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";

export const App = () => {
    const [emailData, setEmailData] = useState("");
    const [passwordData, setPasswordData] = useState("");
    const [inputErrorEmail, setInputErrorEmail] = useState(false);
    const [inputErrorPassword, setInputErrorPassword] = useState(false);


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