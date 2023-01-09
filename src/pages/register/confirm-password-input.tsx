import React from "react";

interface IConfirmPasswordInputProps {
    passedInput: string;
    onError: (validateInput: boolean) => void;
    error: boolean;
};

export const ConfirmPasswordInput: React.FC<IConfirmPasswordInputProps> = (props) => {
    const confirmPassowrdValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        const password = event.target.value;
        if (password !== props.passedInput) {
            props.onError(true);
        }
        else{
            props.onError(false);
        };
    };


    return (
        <label>
            Confirmar senha:
            <input
                type="password"
                id="confirm-password-input"
                onBlur={confirmPassowrdValidation}
            />
            {props.error && <p>Os dois campos não coincidem</p>}
        </label>
    );
}