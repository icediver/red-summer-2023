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

import CardShipment from '../available-tab/card-shipment/CardShipment';
import { ICardShipment } from '../available-tab/card-shipment/card-shipment.interface';

import styles from './TruckLoading.module.scss';
import { IAvailablePackage } from './available-package.interface';
import AvailablePackages from './available-packages/AvailablePackages';
import CardLoading from './available-packages/card-loading/CardLoading';
import ErrorModal from './available-packages/error-modal/ErrorModal';

const TruckLoading: FC<{
	data: ICardShipment;
	packages: IAvailablePackage[];
}> = ({ data, packages }) => {
	const [isShowParcel, setShowParcel] = useState<boolean>(false);
	const [selectedParcels, setSelectedParcels] = useState<IAvailablePackage[]>(
		[]
	);
	const [status, setStatus] = useState('empty');
	const [truck, setTruck] = useState<ICardShipment>({} as ICardShipment);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
	useEffect(() => console.log(selectedParcels), [selectedParcels]);
	useEffect(() => setTruck({ ...data }), []);

	const [mouseCoordinates, setMouseCoordinates] = useState<{
		x: number;
		y: number;
	}>({ x: 0, y: 0 });
	const onMouseDownHandler: MouseEventHandler<HTMLDivElement> = (
		event: MouseEvent<HTMLDivElement>
	) => {
		setShowParcel(true);
		// console.log(event.clientX, event.clientY);
		setMouseCoordinates({ x: event.clientX, y: event.clientY });
	};
	const onDragStartHandler = (event: any) => {
		// console.log(event, typeof event, 'start');
	};
	const onDragOverHandler: DragEventHandler<HTMLDivElement> = event => {
		event.stopPropagation();
		event.preventDefault();
	};

	const onDropHandler: DragEventHandler<HTMLDivElement> = e => {
		const aditionalVolume = selectedParcels.reduce(
			(sum, el) => sum + el.volumeWeight,
			0
		);
		const available = truck.available + aditionalVolume;
		setShowParcel(false);
		if (available <= truck.capacity) {
			setTruck({ ...truck, available });
			setStatus('active');
		} else setIsErrorModalOpen(true);
	};
	const onDragEnterHandler: DragEventHandler<HTMLDivElement> = event => {
		setShowParcel(false);
	};
	return (
		<div className={styles.container} onMouseUp={() => setShowParcel(false)}>
			<div className={styles.header}>
				<div className={styles.breadCrumb}>
					Shipments / <span>{data.number}</span>
				</div>
				<div className={styles.title}>
					{data.route}, {data.number}
					<span className={styles.departure}>{data.departure}</span>
				</div>
			</div>

			<div className={styles.loading}>
				<div className={styles.leftSide}>
					<div onDragEnter={() => console.log('onDragEnter')}>
						{truck.available && <CardLoading {...truck} />}
						<div>
							Upper tier
							<FaCloudscale className='text-black-inactive inline-block ml-4' />
						</div>
						<div className={styles.upperTier}>
							<div className={clsx(styles['empty'])}></div>
							<div className={styles.fully}></div>
							<div className={styles.fully}></div>
							<div className={styles.fully}></div>
						</div>
						<div>
							Middel tier
							<FaCloudscale className='text-black-inactive inline-block ml-4' />
						</div>
						<div className={styles.upperTier}>
							<div className={styles.fully}></div>
							<div className={styles.fully}></div>
							<div
								className={styles[status]}
								onDrop={onDropHandler}
								onDragOver={onDragOverHandler}
							></div>
							<div className={styles.fully}></div>
						</div>
						<div>
							Lower tier
							<FaCloudscale className='text-black-inactive inline-block ml-4' />
						</div>
						<div className={styles.upperTier}>
							<div className={styles.fully}></div>
							<div className={styles.empty}></div>
							<div className={styles.fully}></div>
							<div className={styles.fully}></div>
						</div>
					</div>
					<div className={styles.footer}>
						<Button
							variant='second'
							className='w-full hover:bg-primary hover:text-white'
						>
							<TbBox size={18} />
							View parcels list
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
						packages={packages}
						selectedParcels={selectedParcels}
						setSelectedParcels={setSelectedParcels}
					/>
					{isShowParcel && (
						<div
							className={styles.parcel}
							style={{ left: mouseCoordinates.x, top: mouseCoordinates.y }}
							draggable
							onDragStart={onDragStartHandler}
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
