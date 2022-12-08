import React from "react";

export const EmailInput = (props : any) => {
    const emailValidator = () => {
        return props.emailData.match(/^\S+@\S+\.\S+$/);
    };
    React.useEffect(()=>{
        if(props.validate){
            const validateInput = emailValidator();
            props.onError(!validateInput);
            console.log(!validateInput + " <= o seu input está inválido");
            
        }
        
    }, [props.validate, props.emailData])

    console.log(props.validate);
    console.log(props.error);
    return (
        <div>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" onChange={(event) =>{
                const email = event.target.value;
                props.setData(email);
            }}/>
            {props.validate && props.error && (<p>O email é inválido!!</p>)}
        </div>
    );
};