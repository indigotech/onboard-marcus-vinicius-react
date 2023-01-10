import React from "react";
import { gql, useQuery } from "@apollo/client";
import { LoadingIcon, Modal } from "../../components";
import { UserCard } from "./user-card";
import { useNavigate } from "react-router-dom";
import { UserInfoModal } from "./user-info-modal";

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
    const [showModal, setShowModal] = React.useState(false);
    const [modalId, setModalId] = React.useState(0);

    const { loading, data, error } = useQuery(GET_USERS_MUTATTION);
    const navigate = useNavigate();

    if (loading) {
        return <LoadingIcon />;
    };
    if (error) {
        console.warn(error);
        return <p>Erro! Por favor atualize a página ou tente mais tarde.</p>;
    };


    const arr = data.users.nodes;
   
    const list = arr.map((element: IUserData) => {
        return (
            <UserCard
                userName={element.name}
                userEmail={element.email}
                key={element.id}
                onClick={() => {
                    setShowModal(true);
                    setModalId(arr.length - +element.id);

                }}
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
                <Modal 
                    showModal={showModal}
                    closeModal={() => setShowModal(false)}
                    cleanModalData={() => {}}
                >
                    <UserInfoModal id={modalId}/>
                </Modal>
                <h1>Lista de usuários</h1>
                    {list}
            </main>
        </>
    );
};