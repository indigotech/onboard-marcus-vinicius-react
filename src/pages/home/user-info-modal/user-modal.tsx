import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ModalContent } from "./user-modal.styled";

interface IUserInfoModal {
    id: number;
};

const USER_DATA_QUERY = gql`
    query($userId: PageInput){
        users(data: $userId){
            nodes{
                name
                email
                phone
                birthDate
                role
            }
        }
    }
`;



export const UserInfoModal: React.FC<IUserInfoModal> = (props) => {
    const { data, loading, error } = useQuery(USER_DATA_QUERY, {
        variables: {
            "userId": {
                "limit": 1,
                "offset": props.id
            }
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    const userData = data.users.nodes[0];

    return (
        <ModalContent>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <p>{userData.birthDate}</p>
            <p>{userData.phone}</p>
            <p>{userData.role}</p>
        </ModalContent>
    );
};