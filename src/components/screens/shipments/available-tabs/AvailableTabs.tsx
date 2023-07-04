import { FC } from 'react';
import CardShipment from './card-shipment/CardShipment';
import { shipmentsAvailable } from '@/data/cities';
import styles from './AvailableTabs.module.scss'
const AvailableTabs: FC = () => {

    return (
        <div className={styles.available}>
            {
                shipmentsAvailable.map(item => <CardShipment {...item} key={item.number.value} />)
            }
        </div >
    );
};
export default AvailableTabs;
