import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IButton {
    className?: string
    variant?: 'first' | 'second'
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, variant = 'first' }) => {
    return <button className={clsx(styles.button, className, styles[variant])}>{children}</button>
}

export default Button
