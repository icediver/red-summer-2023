'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {
	FC,
	useState,
	MouseEvent,
	DragEventHandler,
	MouseEventHandler,
	useEffect
} from 'react';
import { FaCloudscale } from 'react-icons/fa';
import { GrDropbox } from 'react-icons/gr';
import { PiTruck } from 'react-icons/pi';
import { TbBox } from 'react-icons/tb';

import Button from '@/ui/button/Button';

import { IParcel } from '../arrival-tab/arrival-tab.interface';
import { ICardShipment } from '../available-tab/card-shipment/card-shipment.interface';

import styles from './TruckLoading.module.scss';
import AvailablePackages from './available-packages/AvailablePackages';
import CardLoading from './available-packages/card-loading/CardLoading';
import ErrorModal from './available-packages/error-modal/ErrorModal';
import CargoSpace from './cargo-space/CargoSpace';
import { useTruckLoading } from './useTruckLoading';

const TruckLoading: FC<{
	data: ICardShipment;
	packages: IParcel[];
}> = ({ data, packages }) => {
	const {
		onDragEnterHandler,
		onMouseDownHandler,
		onDropHandler,
		isShowParcel,
		setIsShowParcel,
		mouseCoordinates,
		truck,
		selectedParcels,
		setSelectedParcels,
		isErrorModalOpen,
		setIsErrorModalOpen,
		status
	} = useTruckLoading(data);

	const [isViewParcelsList, setIsViewParcelsList] = useState<boolean>(false);
	return (
		<div className={styles.container} onMouseUp={() => setIsShowParcel(false)}>
			<div className={styles.header}>
				<div className={styles.breadCrumb}>
					Shipments / <span>{data.number}</span>
				</div>
				<div className={styles.title}>
					{data.destination}, {data.number}
					<span className={styles.departure}>{data.departureDate}</span>
				</div>
			</div>

			<div className={styles.loading}>
				<div className={styles.leftSide}>
					<div onDragEnter={() => console.log('onDragEnter')}>
						<CardLoading {...truck} />
						<CargoSpace onDropHandler={onDropHandler} status={status} />
					</div>
					<div className={styles.footer}>
						<Button
							variant='second'
							className='w-full hover:bg-primary hover:text-white'
							onClick={() => setIsViewParcelsList(!isViewParcelsList)}
						>
							<TbBox size={18} />
							{isViewParcelsList ? 'Available parcels' : 'View parcels list'}
						</Button>
						<Link
							href={'/'}
							className='w-full hover:bg-primary hover:text-white bg-primary/20 rounded-md text-primary text-xs flex justify-center items-center gap-4'
						>
							<PiTruck size={18} />
							Finish loading
						</Link>
					</div>
				</div>
				<div onMouseDown={onMouseDownHandler} className={styles.rightSide}>
					<AvailablePackages
						packages={isViewParcelsList ? truck.parcels : packages}
						selectedParcels={selectedParcels}
						setSelectedParcels={setSelectedParcels}
					/>
					{isShowParcel && (
						<div
							className={styles.parcel}
							style={{ left: mouseCoordinates.x, top: mouseCoordinates.y }}
							draggable
							onDragEnter={onDragEnterHandler}
						>
							<GrDropbox />
							<div>
								<span>{selectedParcels.length} parcels</span>
								<br /> total weight:{' '}
								{selectedParcels.reduce((sum, el) => sum + el.volumeWeight, 0)},
								kg
							</div>
						</div>
					)}
				</div>
			</div>
			{isErrorModalOpen && (
				<ErrorModal
					setIsErrorModalOpen={setIsErrorModalOpen}
					capacity={data.capacity}
				/>
			)}
		</div>
	);
};
export default TruckLoading;
