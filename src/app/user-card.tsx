import React from "react";

interface IUserCardProps {
    userName: string;
    userEmail: string;
};

export const UserCard: React.FC<IUserCardProps> = (props) => {
    return (
        <li>
            <p>Usuàrio: {props.userName}</p>
            <p>Email: {props.userEmail} </p>
        </li>
    );
};