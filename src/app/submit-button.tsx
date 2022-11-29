export const SubmitButton = () => {


    return (
        <>
            <button type="button" onClick={inputValidator}>Entrar</button>
        </>
    );

};

const inputValidator = () => {
    const emailValidator = () => {
        const email = document.querySelector("#email-input") as HTMLInputElement;
        return email.value.match(/^\S+@\S+\.\S+$/);
    };
    const passwordValidator = () => {
        const password = document.querySelector("#password-input") as HTMLInputElement;
        // This regex finds matches if the input.value has a length < 7 and doesn't contain at least
        // a digit and one letter.
        return password.value.match(/^(.{0,6}|[^0-9]*|[^a-z])$/);
    };

    if(!emailValidator()){
        alert('Por favor insira um e-mail válido.');
    };
    if(passwordValidator()){
        alert('Por favor insira uma senha válida.');
    };
};

