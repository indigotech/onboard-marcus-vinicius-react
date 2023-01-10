import React from "react";
import { CloseModal, ModalElement, ModalHeader, ModalWrapper } from "./modal.styled";

interface IModalElement {
    closeModal: () => void;
    cleanModalData: () => void;
    showModal: boolean;
    children: React.ReactNode;
};



export const Modal: React.FC<IModalElement> = (props) => {
    if (!props.showModal) {
        return null;
    };

    return (
        <ModalWrapper>
            <ModalElement>
                <ModalHeader>
                    <CloseModal
                        onClick={() => {
                            props.closeModal();
                            props.cleanModalData();
                        }}
                    >
                        &times;
                    </CloseModal>
                </ModalHeader>
                {props.children}
            </ModalElement>
        </ModalWrapper>
    );
};