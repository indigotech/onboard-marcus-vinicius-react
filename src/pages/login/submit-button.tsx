import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { LoadingIcon } from '../../components';

interface ISubmitButtonProps {
    inputsData: {
        email: string;
        password: string;
    }
    inputError: {
        email: boolean;
        password: boolean;
    }
};

const LOGIN_MUTATION = gql`
    mutation Login($data: LoginInput!) {
        login(data: $data) {
            token
        }
    }
`;

export const SubmitButton: React.FC<ISubmitButtonProps> = (props) => {
    const { setAuth } = useLocalStorage();
    const navigate = useNavigate();

    const [mutateFunction, { loading, error }] = useMutation<{ login: { token: string } }>(LOGIN_MUTATION, {
        onCompleted: (data) => {
            setAuth(data.login.token);
            navigate('/home', { replace: true })
        }
    });

    const handleClick = () => {
        if (!(props.inputError.email && props.inputError.password)) {
            mutateFunction({
                variables: {
                    data: {
                        email: props.inputsData.email,
                        password: props.inputsData.password
                    }
                }
            });
        };
    };

    if (loading) {
        return (
            <button
                type="button"
                disabled={true}>
                <LoadingIcon />
            </button>);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleClick}>
                Entrar
            </button>
            {error && <p>{error.message}</p>}
        </>
    );
};