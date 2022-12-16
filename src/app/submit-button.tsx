import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

interface ISubmitButtonProps {
    inputsData: {
        email: string;
        password: string;
    }
    inputError: {
        email: boolean;
        password: boolean;
    }

}

const loginMutation = gql`
    mutation Login($data: LoginInput!) {
        login(data: $data) {
            token
        }
    }
`;

export const SubmitButton: React.FC<ISubmitButtonProps> = (props) => {
    const storage = useLocalStorage()

    const [mutateFunction, { data, loading, error }] = useMutation(loginMutation, {
        variables: {
            data: {
                email: props.inputsData.email,
                password: props.inputsData.password
            }
        }
    }
    );

    React.useEffect(() => {
        if (data) {
            storage.setAuth(data.login.token);
        };
    }, [data])

    const handleClick = () => {
        if (!(props.inputError.email && props.inputError.password)) {
            mutateFunction();
        };
    };

    return (
        <>
            <button type="button" onClick={handleClick}>
                Entrar
            </button>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
        </>
    );
};
