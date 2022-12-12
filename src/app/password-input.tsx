import React from "react";

interface IPassowrdInputProps {
    setData: (password: string) => void;
    passwordData: string;
    validate: boolean;
    onError: (validateInput: boolean) => void;
    error: boolean;
}

export const PasswordInput: React.FC<IPassowrdInputProps> = (props) => {
    const passwordValidator = () => {
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        return props.passwordData.match(/^(.{0,6}|[^0-9]*|[^a-z|A-z]*)$/);
    };
    React.useEffect(() => {
        if (props.validate) {
            const validateInput = passwordValidator();
            props.onError(Boolean(validateInput));
        };
    }, [props.validate, props.passwordData]);


    return (
        <div>
            <label htmlFor="password-input">Senha</label>
            <input type="password" id="password-input" onChange={(event) => {
                const password = event.target.value;
                props.setData(password);
            }} />
            {props.validate && props.error && (<p>A senha é inválida!!</p>)}
        </div>
    );
};