export interface ICardShipment {
    route: string
    departure: string
    available: IItemsCardShipment
    number: IItemsCardShipment
    truck: IItemsCardShipment
    capacity: number
}

export interface IItemsCardShipment {
    title: string
    value: string | number
}
