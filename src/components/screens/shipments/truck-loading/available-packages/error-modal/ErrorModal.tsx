import { FC } from 'react';
import { PiWarningFill } from 'react-icons/pi';

import styles from './ErrorModal.module.scss';
import IErrorModal from './error-loading.interface';

const ErrorModal: FC<IErrorModal> = ({ capacity, setIsErrorModalOpen }) => {
	return (
		<div className={styles.errorModal}>
			<div className={styles.message}>
				<PiWarningFill size={54} />
				<span>Maximum capacity is {capacity} kg</span>
			</div>
			<button onClick={() => setIsErrorModalOpen(false)}>ok</button>
		</div>
	);
};
export default ErrorModal;
