import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface IButton {
	className?: string;
	variant?: 'first' | 'second';
	onClick: () => void;
}
const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'first',
	onClick
}) => {
	return (
		<button
			onClick={onClick}
			className={clsx(styles.button, className, styles[variant])}
		>
			{children}
		</button>
	);
};

export default Button;
