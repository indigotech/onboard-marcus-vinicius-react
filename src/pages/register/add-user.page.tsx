import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, BirthDateInput, CellPhoneInput, SelectRoleInput } from "../../components";
import { ConfirmPasswordInput } from "./confirm-password-input";


interface IDataObject {
    name: string;
    email: string;
    birthDate: string;
    phone: string;
    password: string;
    role: string;
    [key: string]: string;
};


const CREATE_USER_MUTATION = gql`
    mutation CreateUser($createUserData: UserInput!) {
        createUser(data: $createUserData) {
            birthDate
            email
            id
            name
            phone
            role
        }
    }
`;



export const AddUserForm = () => {
    const [inputErrorName, setInputErrorName] = React.useState(false);
    const [inputErrorEmail, setInputErrorEmail] = React.useState(false);
    const [inputErrorCellphone, setInputErrorCellphone] = React.useState(false);
    const [inputErrorBirthDate, setInputErrorBirthDate] = React.useState(false);
    const [inputErrorPassword, setInputErrorPassword] = React.useState(false);
    const [inputErrorConfirmPassword, setInputErrorConfirmPassword] = React.useState(false);

    const [passwordData, setPasswordData] = React.useState("");
    const [emailData, setEmailData] = React.useState("");
    const [birthDateData, setBirthDateData] = React.useState("");
    const [cellphoneData, setCellphoneData] = React.useState("");
    const [nameData, setNameData] = React.useState("");
    const [roleData, setRoleData] = React.useState("");

    const navigate = useNavigate();
    const [mutateFunction, {loading, error}] = useMutation(CREATE_USER_MUTATION, {
        onCompleted: () => {
            navigate("/home", {replace: true});
        }
    });


    const nameValidator = (name: string) => {
        if (name.length > 45 || name.length < 5) {
            return false;
        }
        return true;
    };

    const emailValidator = (email: string) => {
        return Boolean(email.match(/^\S+@\S+\.\S+$/));
    };

    const passwordValidator = (password: string) => {
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        const regex = /^(.{0,6}|[^0-9]*|[^a-z|A-z]*)$/
        return !regex.test(password);
    };

    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            name: nameData,
            email: emailData,
            birthDate: birthDateData,
            phone: cellphoneData,
            password: passwordData,
            role: roleData
        };

        const hasEmptyElement = (obj: IDataObject) => {
            for (const key in obj) {
                if (obj[key] === "") {
                    return true;
                };
            };
            return false;
        };

        if (
            inputErrorName ||
            inputErrorEmail ||
            inputErrorBirthDate ||
            inputErrorCellphone ||
            inputErrorPassword ||
            inputErrorConfirmPassword ||
            hasEmptyElement(userData)
        ) {
            alert("no!"); //Vou mudar isso ainda, juro
            return;
        };
        console.log(userData)
        mutateFunction({
            variables: {
                createUserData: userData
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                onValueChange={setNameData}
                onError={setInputErrorName}
                error={inputErrorName}
                label="Nome: "
                validateFunc={nameValidator}
                errorMessage="O nome é inválido"

            />
            <TextInput
                onValueChange={setEmailData}
                onError={setInputErrorEmail}
                error={inputErrorEmail}
                label="Email: "
                validateFunc={emailValidator}
                errorMessage="O email é inválido"
            />
            <BirthDateInput
                setData={setBirthDateData}
                onError={setInputErrorBirthDate}
                error={inputErrorBirthDate}
            />
            <CellPhoneInput
                setData={setCellphoneData}
                onError={setInputErrorCellphone}
                error={inputErrorCellphone}
            />
            <TextInput
                onValueChange={setPasswordData}
                onError={setInputErrorPassword}
                error={inputErrorPassword}
                label="Senha: "
                validateFunc={passwordValidator}
                errorMessage="A senha é inválida"
                type="password"
            />
            <ConfirmPasswordInput
                passedInput={passwordData}
                onError={setInputErrorConfirmPassword}
                error={inputErrorConfirmPassword}
            />
            <SelectRoleInput setData={setRoleData} />
            <input type="submit" value="Adicionar usuário" />
            {error && <p>{error.message}</p>}
            {loading && <p>Loading...</p>}
        </form>
    );
};