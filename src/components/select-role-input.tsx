import React from "react";

interface IRoleInputProps {
    setData: (role: string) => void;
}

export const SelectRoleInput: React.FC<IRoleInputProps> = (props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const role = event.target.value;
        if(role){
            props.setData(role);
        }
    };

    return (
        <div>
            <label>
                Cargo:
                <select onChange={handleChange} defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuário</option>
                </select>
            </label>
        </div>
    );
}