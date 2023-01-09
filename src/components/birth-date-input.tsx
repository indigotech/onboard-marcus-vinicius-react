import React from "react";

interface IBirthDateInputProps {
    error: boolean;
    onError: (validateInput: boolean) => void;
    setData: (date: string) => void;
};

export const BirthDateInput: React.FC<IBirthDateInputProps> = (props) => {
    const [day, setDay] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");


    React.useEffect(() => {
        if(!year || !month || !day ) {
          return;  
        };

        const inputDate = `${year}-${month}-${day}`;
        const today = new Date().getTime();
        const birthDate = new Date(inputDate).getTime();

        if(
            //See if the birth date is valid
            isNaN(birthDate) || 
            // See if the birth date was more than 18 years ago
            today - birthDate < 568025136000
            ) {
            props.onError(true);
            return;
        };
        props.onError(false);
        props.setData(inputDate);
    }, [year, month, day]);
    
    const dayInputHandleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setDay(inputValue);
    };

    const monthInputHandleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setMonth(inputValue);
    };

    const yearInputHandleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setYear(inputValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");
    };

    return (
        <div>
            <label>
                Data de nascimento:
                <label>
                    Dia:
                    <input
                        type="text"
                        maxLength={2}
                        onChange={handleChange}
                        onBlur={dayInputHandleBlur}
                        size={1}
                        placeholder="dd"
                    />
                </label>
                <label>
                    Mês:
                    <input
                        type="text"
                        maxLength={2}
                        onChange={handleChange}
                        onBlur={monthInputHandleBlur}
                        size={1}
                        placeholder="mm"
                    />
                </label>
                <label>
                    Ano:
                    <input
                        type="text"
                        maxLength={4}
                        onChange={handleChange}
                        onBlur={yearInputHandleBlur}
                        size={2}
                        placeholder="aaaa"
                    />
                </label>
            </label>
            {props.error && <p>Por favor insira uma data de nascimento válida</p>}
        </div>
    );
};