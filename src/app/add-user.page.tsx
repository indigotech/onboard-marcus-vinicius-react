import { gql } from "@apollo/client";
import React from "react";
import { BirthDateInput } from "./birth-date-input";
import { CellPhoneInput } from "./cellphone-input";
import { ConfirmPasswordInput } from "./confirm-password-input";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SelectRoleInput } from "./select-role-input";


const CREATE_USER_MUTATION = gql`

mutation CreateUser($createUserData2: UserInput!) {
    createUser(data: $createUserData2) {
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


    const [data, setData] = React.useState({
        name: "",
        email: "",
        birthDate: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setData({
            name: nameData,
            email: emailData,
            birthDate: birthDateData,
            phone: cellphoneData,
            password: passwordData,
            role: roleData
        })
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" />
            </label>
            <EmailInput
                setData={setEmailData}
                onError={setInputErrorEmail}
                error={inputErrorEmail}
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
            <PasswordInput
                setData={setPasswordData}
                onError={setInputErrorPassword}
                error={inputErrorPassword}
            />
            <ConfirmPasswordInput
                passedInput={passwordData}
                onError={setInputErrorConfirmPassword}
                error={inputErrorConfirmPassword}
            />
            <SelectRoleInput setData={setRoleData} />
            <input type="submit" value="Adicionar usuário" />
        </form>
    );
};