import { Dispatch, SetStateAction } from 'react';

export default interface IErrorModal {
	capacity: number;
	setIsErrorModalOpen: Dispatch<SetStateAction<boolean>>;
}
