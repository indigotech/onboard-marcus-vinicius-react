import { useState } from "react";
import React from "react";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";

export const App = () => {
    const [emailData, setEmailData] = useState('');
    const [passwordData, setPasswordData] = useState('');
    const [validate, setValidate] = useState(false);
    const [inputError, setInputError] = useState({email: false, password: false });

    return (
        <>
            <h1>Bem-vindo(a) à Taqtile!</h1>
            
            <EmailInput setData={setEmailData} 
            onError={(err : boolean) => setInputError((prev) => ({...prev, email: err}))} validate={validate} 
            emailData={emailData} error={inputError.email}/>

            <PasswordInput setData={setPasswordData} onError={setInputError} validate={validate}/>
            <SubmitButton inputsData={{
                email: emailData,
                password: passwordData
            }} onClick={() => setValidate(true)} inputError={inputError.email && inputError.password} 
            validate={validate}/>
        </>
    );
};