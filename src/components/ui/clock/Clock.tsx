import { FC, useEffect, useState } from 'react';

const Clock: FC = () => {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDateState(new Date()), 1000);
	}, []);
	return (
		<div className='w-40 text-sm font-normal'>
			<span>
				{dateState.toLocaleDateString('en-US', {
					weekday: 'short',
					day: 'numeric',
					month: 'short'
					// year: 'numeric',
				})}
			</span>
			<span className='ml-1.5'>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					hour12: false
				})}
			</span>
		</div>
	);
};

export default Clock;
