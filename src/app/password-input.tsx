import { isConstValueNode } from "graphql";
import React from "react";

interface IPassowrdInputProps {
    setData: (password: string) => void;
    passwordData: string;
    onError: (validateInput: boolean) => void;
    error: boolean;
}

export const PasswordInput: React.FC<IPassowrdInputProps> = (props) => {
    const [passwordValidate, setPasswordValidate] = React.useState(false);

    const passwordValidator = (password: string) => {
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        const regex = /^(.{0,6}|[^0-9]*|[^a-z|A-z]*)$/
        return !regex.test(password);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const password = event.target.value;
        const validateInput = passwordValidator(password);
        props.onError(!validateInput);
        setPasswordValidate(true);

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;

        if (passwordValidate) {
            const validateInput = passwordValidator(password);
            props.onError(!validateInput);
        }

        props.setData(password);
    };



    return (
        <div>
            <label htmlFor="password-input">Senha</label>
            <input type="password" id="password-input" onChange={handleChange} onBlur={handleBlur} />
            {passwordValidate && props.error && (<p>A senha é inválida!!</p>)}
        </div>
    );
};