import { DragEventHandler } from 'react';

export interface ICargoSpace {
    status: string;
    onDropHandler: DragEventHandler<HTMLDivElement>;
}
