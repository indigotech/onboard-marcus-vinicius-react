import React from "react";

interface IBirthDateInputProps {
    error: boolean;
    onError: (validateInput: boolean) => void;
    setData: (date: string) => void;
};

export const BirthDateInput: React.FC<IBirthDateInputProps> = (props) => {
    const [day, setDay] = React.useState(1);
    const [month, setMonth] = React.useState(1);
    const [year, setYear] = React.useState(1111);
    const [maxDay, setMaxDay] = React.useState(31);

    const [dayValidateError, setDayValidateError] = React.useState(false);
    const [monthValidateError, setMonthValidateError] = React.useState(false);
    const [yearValidateError, setYearValidateError] = React.useState(false);

    React.useEffect(() => {
        if (dayValidateError || monthValidateError || yearValidateError) {
            props.onError(true);
        }
        else {
            props.onError(false);
        };
    }, [dayValidateError, monthValidateError, yearValidateError])



    const today = new Date();

    const birthDateValidation = () => {
        if (today.getFullYear() - year < 18) {
            props.onError(true);
        }
        else {
            props.onError(false);
        };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");
    };

    const birthDayValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        const isLeapYear = () => {
            return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
        };

        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11:
                setMaxDay(30);
                break;
            case 2:
                setMaxDay(
                    isLeapYear() ? 29 : 28
                );
                break;
        };

        const day = +(event.target.value);
        if (day > maxDay) {
            event.target.value = `${maxDay}`;
        };
        if (day < 1) {
            event.target.value = "01";
        };

        setDay(day);
    };

    const dayInputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");

        const day = +(input.value);
        if (day > maxDay || day < 1) {
            setDayValidateError(true);
        }
        else {
            
        }



    };

    const monthInputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");

        const month = +(input.value);
        if (month > 12 || month < 1) {
            setMonthValidateError(true);
        }
        else {
            setMonthValidateError(false);
        };

        if (!monthValidateError) {
            setMonth(month);
        };
    };


    const yearInputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, "");

        const year = +(input.value);
        if (year < 1900 || year > today.getFullYear()) {
            setYearValidateError(true);
        }
        else {
            setYearValidateError(false)
        };

        if (!yearValidateError) {
            setYear(year);
        };
    };


    return (
        <div onBlur={birthDateValidation}>
            <label>
                Data de nascimento:
                <label>
                    Dia:
                    <input
                        type="text"
                        maxLength={2}
                        onChange={handleChange}
                        onBlur={birthDayValidation}
                        size={1}
                        placeholder="dd"
                    />
                </label>
                <label>
                    Mês:
                    <input
                        type="text"
                        maxLength={2}
                        onChange={monthInputHandleChange}
                        size={1}
                        placeholder="mm"
                    />
                </label>
                <label>
                    Ano:
                    <input
                        type="text"
                        maxLength={4}
                        onChange={yearInputHandleChange}
                        size={2}
                        placeholder="aaaa"
                    />
                </label>
            </label>
            {props.error && <p>Por favor insira uma data de nascimento válida</p>}
        </div>
    );
};