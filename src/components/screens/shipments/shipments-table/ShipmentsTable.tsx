import { shipmentsData } from '@/data/cities'
import { FC } from 'react'
import MenuItem from './menu-item/MenuItem'

const ShipmentsTable: FC = () => {
    return <div>
        {
            shipmentsData.map((items, index) =>
                <MenuItem {...items} />
            )
        }
    </div>
}

export default ShipmentsTable
