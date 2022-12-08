import { gql, useMutation } from '@apollo/client';
import React from 'react';

const loginMutation = gql`
    mutation Login($data: LoginInput!) {
        login(data: $data) {
            token
        }
    }
`;


export const SubmitButton = (props: any) => {
    const [mutateFunction, { data, loading, error }] = useMutation(loginMutation, {
        variables: {
            "data": {
                "email": `${props.inputsData.email}`,
                "password": `${props.inputsData.password}`
            }
        }
    });

    if (loading) return <p>Submitting...</p>;
    if (error) return <p>Submission error! {error.message}</p>

    function handleClick() {
        if (!props.validate) {
            props.onClick();
        }
        else {
            if (!props.inputError) {
                mutateFunction();
            };
        }
        console.log(data);
    };

    return (
        <>
            <button type="button" onClick={handleClick}>
                Entrar
            </button>
        </>
    );

};
