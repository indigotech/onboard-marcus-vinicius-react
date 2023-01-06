import React from "react";
import { gql, useQuery } from "@apollo/client";
import { LoadingIcon } from "../../components";
import { UserCard } from "./user-card";
import { useNavigate } from "react-router-dom";

interface IUserData {
    name: string;
    id: string;
    email: string;
};

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
    const navigate = useNavigate();

    if (loading) {
        return <LoadingIcon />;
    };
    if (error) {
        console.log(error);
        return <p>Erro! Por favor atualize a página ou tente mais tarde.</p>;
    };

    const list = data.users.nodes.map((element: IUserData) => {
        return (
            <UserCard
                userName={element.name}
                userEmail={element.email}
                key={element.id}
            />
        );
    });

    return (
        <>
            <header>
               <h1>Taqtile</h1> 
               <nav>
                    <a onClick={() => navigate("/register", {replace: true})}>Adicionar usuário</a>
               </nav>
            </header>
            <main>
                <h1>Lista de usuários</h1>
                <ul>
                    {list}
                </ul>
            </main>
        </>
    );
};