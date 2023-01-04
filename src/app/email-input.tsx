import React from "react";

interface IEmailInputProps {
    setData: (email: string) => void;
    onError: (validateInput: boolean) => void;
    error: boolean;
}

export const EmailInput = (props: IEmailInputProps) => {
    const [emailValidate, setEmailValidate] = React.useState(false);

    const emailValidator = (email: string) => {
        return email.match(/^\S+@\S+\.\S+$/);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const email = event.target.value;
        const validateInput = emailValidator(email);
        props.onError(!validateInput);
        setEmailValidate(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;

        if (emailValidate) {
            const validateInput = emailValidator(email);
            props.onError(!validateInput);
        }

        props.setData(email);
    };


    return (
        <div>
            <label>E-mail
                <input
                    type="text"
                    id="email-input"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {emailValidate && props.error && (<p>O email é inválido</p>)}
            </label>
        </div>
    );
};