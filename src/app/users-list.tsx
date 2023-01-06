import React from "react";
import { gql, useQuery } from "@apollo/client";
import { LoadingIcon } from "./loading-icon";
import { UserCard } from "./user-card";

const GET_USERS_MUTATTION = gql`
    query{
        users{
            nodes {
                id
                name
                email
            }
        }
    }
`;

export const UserList = () => {
    const { loading, data, error } = useQuery(GET_USERS_MUTATTION);

    if (loading) {
        return <LoadingIcon />;
    };
    if (error) {
        console.log(error); 
        return <p>Erro! Por favor atualize a página ou tente mais tarde.</p>;
    };
    const list = data.users.nodes.map((element: any) => {
        return (
            <UserCard userName={element.name} userEmail={element.email} key={element.id} />
        );
    });

    return (
        <main>
            <h1>Lista de usuários</h1>
            <ul>
                {list}
            </ul>
        </main>
    );
};