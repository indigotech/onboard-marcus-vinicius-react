import React from "react";

interface IInputProps {
    onValueChange: (email: string) => void;
    onError: (validateInput: boolean) => void;
    validateFunc?: (input: string) => boolean;
    label: string;
    errorMessage?: string;
    error: boolean;
    type?: string;
}

export const TextInput = (props: IInputProps) => {
    const [inputValidate, setInputValidate] = React.useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const validateInput = props.validateFunc?.(inputValue);

        if (validateInput != undefined) {
            setInputValidate(true);
            props.onError(!validateInput);
        };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (inputValidate) {
            const validateInput = props.validateFunc?.(inputValue);
            props.onError(!validateInput);
        }

        props.onValueChange(inputValue);
    };


    return (
        <div>
            <label>{props.label}
                <input
                    type={props.type?? "text"}
                    id={props.label + "-input"}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {inputValidate && props.error && (<p>{props.errorMessage}</p>)}
            </label>
        </div>
    );
};
