import React from 'react';

import Layout from '@/layout/layout/Layout';

import Shipments from '../shipments/Shipments';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<Layout>
			<div className={styles.mainContent}>
				<Shipments />
			</div>
		</Layout>
	);
};

export default Home;
