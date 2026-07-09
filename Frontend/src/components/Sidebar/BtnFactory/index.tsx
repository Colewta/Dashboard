import type { LucideIcon } from "lucide-react";
import styles from './BtnFactory.module.css';

interface BtnProps {
    label: string;
    Icon: LucideIcon;
    active?: boolean;
    onClick?: () => void;
}

const BtnFactory = ({label, Icon, active, onClick, ...rest}: BtnProps) => {
    return (
        <button
            {...rest}
            onClick={onClick}
            className={`${active ? styles.active : ""} ${styles.btnSidebar}`}
            >
            <Icon size={20} />
            <span>{label}</span>
        </button>
    );
}

export default BtnFactory;