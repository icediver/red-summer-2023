import clsx from "clsx";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

import styles from "./MenuItem.module.scss";

interface IMenuItem {
    title: string;
    Icon: IconType;
    notification: string | number;
    index: number;
    className?: string;
    setIsActive: Dispatch<SetStateAction<number>>;
    isActive: boolean;
}

const MenuItem: FC<IMenuItem> = ({
    title,
    Icon,
    notification = 0,
    index,
    className = "",
    setIsActive,
    isActive
}) => {
    return (
        <button
            className={clsx(styles.menuItem, className, {
                [styles.active]: isActive
            })}
            onClick={() => setIsActive(index)}
        >
            <div>
                <Icon size={22} />
                <span>{title}</span>
            </div>
            {notification !== "" && (
                <div className={styles.notification}>{notification}</div>
            )}
        </button>
    );
};

export default MenuItem;
