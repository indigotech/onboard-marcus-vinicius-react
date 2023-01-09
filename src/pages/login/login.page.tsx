import React from "react";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { Navigate } from "react-router-dom";
import { TextInput } from "../../components/text-input";
import { SubmitButton } from "./submit-button";


export const LoginPage = () => {
    const { auth } = useLocalStorage();
    const [emailData, setEmailData] = React.useState("");
    const [passwordData, setPasswordData] = React.useState("");
    const [inputErrorEmail, setInputErrorEmail] = React.useState(false);
    const [inputErrorPassword, setInputErrorPassword] = React.useState(false);

    if (auth) {
        return <Navigate to="/home" replace />;
    }

    const emailValidator = (email: string) => {
        return Boolean(email.match(/^\S+@\S+\.\S+$/));
    };

    const passwordValidator = (password: string) => {
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        const regex = /^(.{0,6}|[^0-9]*|[^a-z|A-z]*)$/
        return !regex.test(password);
    };

    return (
        <>
            <h1>Bem-vindo(a) à Taqtile!</h1>

            <TextInput
                onValueChange={setEmailData}
                onError={setInputErrorEmail}
                error={inputErrorEmail}
                label="Email"
                validateFunc={emailValidator}
                errorMessage="O email é inválido"
            />

            <TextInput
                onValueChange={setPasswordData}
                onError={setInputErrorPassword}
                error={inputErrorPassword}
                label="Senha"
                validateFunc={passwordValidator}
                errorMessage="A senha é inválida"
                type="password"
            />

            <SubmitButton inputsData={{
                email: emailData,
                password: passwordData
            }} inputError={{
                email: inputErrorEmail, 
                password: inputErrorPassword
            }} />
        </>
    );
};