import Layout from '@/layout/layout/Layout'
import React from 'react'
import styles from './Home.module.scss'
import Shipments from '../shipments/Shipments'

const Home = () => {
    return <Layout>
        <div className={styles.mainContent}>

            <Shipments />
        </div>
    </Layout>
}

export default Home
