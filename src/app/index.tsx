import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";

export const App = () => {
    return (
        <>
            <h1>Bem-vindo(a) à Taqtile!</h1>
            <EmailInput />
            <PasswordInput />
            <SubmitButton />
        </>
    );
};