'use client';

import {
	useEffect,
	useState,
	MouseEvent,
	MouseEventHandler,
	DragEventHandler
} from 'react';

import { IParcel } from '../arrival-tab/arrival-tab.interface';
import { ICardShipment } from '../available-tab/card-shipment/card-shipment.interface';

export const useTruckLoading = (data: ICardShipment) => {
	const [isShowParcel, setIsShowParcel] = useState<boolean>(false);
	const [selectedParcels, setSelectedParcels] = useState<IParcel[]>([]);
	const [status, setStatus] = useState('empty');
	const [truck, setTruck] = useState<ICardShipment>({} as ICardShipment);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
	// useEffect(() => console.log(selectedParcels), [selectedParcels]);
	useEffect(() => setTruck({ ...data }), []);

	const [mouseCoordinates, setMouseCoordinates] = useState<{
		x: number;
		y: number;
	}>({ x: 0, y: 0 });
	const onMouseDownHandler: MouseEventHandler<HTMLDivElement> = (
		event: MouseEvent<HTMLDivElement>
	) => {
		setIsShowParcel(true);
		setMouseCoordinates({ x: event.clientX, y: event.clientY });
	};
	const onDragOverHandler: DragEventHandler<HTMLDivElement> = event => {
		event.stopPropagation();
		event.preventDefault();
	};

	const onDropHandler: DragEventHandler<HTMLDivElement> = event => {
		const loadingWeight = truck.parcels.reduce(
			(acc, parcel) => acc + parcel.volumeWeight,
			0
		);

		const aditionalVolume = selectedParcels.reduce(
			(sum, el) => sum + el.volumeWeight,
			0
		);
		const available = loadingWeight + aditionalVolume;
		setIsShowParcel(false);
		if (available <= truck.capacity) {
			setTruck({ ...truck, parcels: [...truck.parcels, ...selectedParcels] });
			setStatus('active');
		} else setIsErrorModalOpen(true);
	};
	const onDragEnterHandler: DragEventHandler<HTMLDivElement> = event => {
		setIsShowParcel(false);
	};

	return {
		onDragOverHandler,
		onDropHandler,
		onDragEnterHandler,
		mouseCoordinates,
		isShowParcel,
		setIsShowParcel,
		status,
		onMouseDownHandler,
		isErrorModalOpen,
		setIsErrorModalOpen,
		selectedParcels,
		setSelectedParcels,
		truck
	};
};
