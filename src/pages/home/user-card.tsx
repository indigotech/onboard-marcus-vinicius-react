import React from "react";

interface IUserCardProps {
    userName: string;
    userEmail: string;
    onClick: () => void;
};

export const UserCard: React.FC<IUserCardProps> = (props) => {
    return (
        <div onClick={props.onClick}>
            <p>Usuário: {props.userName}</p>
            <p>Email: {props.userEmail} </p>
        </div>
    );
};