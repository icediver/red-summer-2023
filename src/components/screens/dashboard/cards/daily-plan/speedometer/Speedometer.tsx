import { circle } from 'leaflet';
import { FC } from 'react';
import { FaEllipsis } from 'react-icons/fa6';

import styles from './Speedometer.module.scss';

const Speedometer: FC = () => {
	const length = Math.PI * 140;
	return (
		<div className={styles.speedometer}>
			<div className={styles.ellipsis}>
				<FaEllipsis />
			</div>
			<div className={styles.good}>👍</div>
			<svg className='inline-block' height='200' width='300'>
				<circle
					cx='150'
					cy='200'
					r='140'
					fill='none'
					strokeWidth={15}
					stroke='#EEEDF2'
				/>
				<circle
					cx='150'
					cy='200'
					r='140'
					fill='none'
					strokeWidth={15}
					strokeDasharray={length}
					strokeDashoffset={-length / 2}
					stroke='#00D086'
				>
					<animate
						attributeName='stroke-dashoffset'
						begin={'0s'}
						dur='1.5s'
						from='0'
						to={-length / 2}
					/>
				</circle>
			</svg>
			<div className={styles.footer}>
				<span>0%</span>
				<span className={styles.currentValue}>50%</span>
				<span>100%</span>
			</div>
		</div>
	);
};
export default Speedometer;
