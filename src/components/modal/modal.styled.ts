import styled from "styled-components";


export const ModalWrapper = styled.div`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
    background-color: #86BBD8;

    width: 100%;
    height: 1.75em;

    display: flex;
    justify-content: end;
    align-items: center;
`;

export const CloseModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;

    background-color: #CA054D;

    border-radius: 50%;
    border: solid 2px #EEEEEE;

    width: 1rem;
    height: 1rem;

    font-size: 1rem;
    font-weigth: 700;
    color: #EEEEEE;

    cursor: pointer;
`;

export const ModalElement = styled.div`
    background-color: #EEEEEE;
    width: 50vw;
    min-height: 60vh;
`;


