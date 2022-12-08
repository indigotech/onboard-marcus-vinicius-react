import React from "react";

export const PasswordInput = (props : any) => {
    const passwordValidator = () => {
        const password = document.querySelector("#password-input") as HTMLInputElement;
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        return password.value.match(/^(.{0,6}|[^0-9]*|[^a-z|A-z]*)$/);
    };
    
    return (
        <div>
            <label htmlFor="password-input">Senha</label>
            <input type="password" id="password-input" onBlur={() =>{
                const password = document.querySelector('#password-input') as HTMLInputElement;
                props.setData(password.value);
            }}/>
        </div>
    );
};