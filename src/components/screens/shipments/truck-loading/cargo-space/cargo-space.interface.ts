import { DragEventHandler } from 'react';

import { ICardShipment } from '../../available-tab/card-shipment/card-shipment.interface';

export interface ICargoSpace {
	status: string;
	onDropHandler: DragEventHandler<HTMLDivElement>;
	truck: ICardShipment;
}
