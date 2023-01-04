import React from "react";

interface ICellPhoneInputProps {
    setData: (phone: string) => void;
    error: boolean;
    onError: (validateInput: boolean) => void;
};

export const CellPhoneInput: React.FC<ICellPhoneInputProps> = (props) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");

        const cellphone = event.target.value;
        if (cellphone.length >= 11) {
            props.onError(false);
            props.setData(cellphone);
        };
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const cellphone = event.target.value;

        if (cellphone.length < 11) {
            props.onError(true);
        };
    };

    return (
        <div>
            <label>
                Celular:
                <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={15} />
            </label>
            {props.error && <p>Insira um número de celular válido</p>}
        </div>
    );
};