import React from "react";

interface IEmailInputProps {
    setData: (email: string) => void;
    emailData: string;
    validate: boolean;
    onError: (validateInput: boolean) => void;
    error: boolean;
}

export const EmailInput = (props: IEmailInputProps) => {
    const emailValidator = () => {
        return props.emailData.match(/^\S+@\S+\.\S+$/);
    };
    React.useEffect(() => {
        if (props.validate) {
            const validateInput = emailValidator();
            props.onError(!validateInput);
        };
    }, [props.validate, props.emailData]);

    return (
        <div>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" onChange={(event) => {
                const email = event.target.value;
                props.setData(email);
            }} />
            {props.validate && props.error && (<p>O email é inválido!!</p>)}
        </div>
    );
};