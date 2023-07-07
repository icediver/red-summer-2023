import { IShipmentData, shipmentsData } from '@/data/cities'
import { FC } from 'react'
import MenuItem from './menu-item/MenuItem'

interface IShipments {
    shipments?: IShipmentData[]
}

const ShipmentsTable: FC<IShipments> = ({ shipments = [] }) => {
    return <div>
        {
            shipments.map((items, index) =>
                <MenuItem key={items['Shipment number']} {...items} />
            )
        }
    </div>
}

export default ShipmentsTable
