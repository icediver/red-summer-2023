import { FC, PropsWithChildren, useState } from 'react'
import styles from './Layout.module.scss'
import Dashboard from '../dashboard/Dashboard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cn, { clsx } from 'clsx'
import Header from './header/Header'


const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false)
    return <section className={styles.layout}>
        <div className={styles.border}>
            <div className={styles.content}>
                <Dashboard
                    isOpen={isDashboardOpen}
                    setIsOpen={setIsDashboardOpen}
                />
                <div className={cn(styles.collapseButton, {
                    [styles.closed]: isDashboardOpen
                })}>
                    <button onClick={() => setIsDashboardOpen(!isDashboardOpen)}>
                        {
                            !isDashboardOpen
                                ? <FaChevronLeft color='#C2C6CF' className={styles.icon} />
                                : <FaChevronRight color='#C2C6CF' className={styles.icon} />
                        }
                    </button>
                </div>

                <div className={clsx(styles.rightSide, isDashboardOpen ? 'w-full' : 'w-4/5')}>
                    <Header />
                    <div className={styles.children}>{children}</div>
                </div>
            </div>
        </div>
    </section >

}

export default Layout
