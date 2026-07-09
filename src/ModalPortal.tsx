import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

const modalRoot = document.getElementById("modal-root")!;

const ModalPortal = ({ children }: Props) => {
    return createPortal(children, modalRoot);
};

export default ModalPortal;