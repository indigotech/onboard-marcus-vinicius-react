import { gql, useMutation } from '@apollo/client';
import React from 'react';

interface ISubmitButtonProps {
    inputsData: {
        email: string;
        password: string;
    }
    inputError: {
        email: boolean;
        password: boolean;
    }
    onClick: () => void;
    validate: boolean;

}

const loginMutation = gql`
    mutation Login($data: LoginInput!) {
        login(data: $data) {
            token
        }
    }
`;

export const SubmitButton: React.FC<ISubmitButtonProps> = (props) => {
    const [mutateFunction, { data, loading, error }] = useMutation(loginMutation, {
        variables: {
            data: {
                email: props.inputsData.email,
                password: props.inputsData.password
            }
        }
    }
    );

    const handleClick = () => {
        if (!props.validate) {
            props.onClick();
        }
        else {
            if (!(props.inputError.email && props.inputError.password)) {
                mutateFunction()
                    .then(({ data }) => {
                        window.localStorage.setItem("user-session-token", data.login.token);
                    })
                    .catch(err => {
                        err;
                    });
            };
        };
    };

    return (
        <>
            <button type="button" onClick={handleClick}>
                Entrar
            </button>
            {error && <p>{error.message}</p>}
        </>
    );
};
