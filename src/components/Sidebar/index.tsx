import { useState } from 'react';
import BtnFactory from './BtnFactory';
import { buttons } from './BtnInfos';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");

    return (
        <nav className={styles.sidebar}>
            {buttons.map((btnInfos, index) => (
                <BtnFactory
                    key={index}
                    label={btnInfos.label}
                    Icon={btnInfos.Icon}
                    active={active === btnInfos.label}
                    onClick={() => setActive(btnInfos.label)}
                />
            ))}
        </nav>
    )
}

export default Sidebar;