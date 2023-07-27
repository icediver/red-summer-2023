import { FC } from 'react'
import styles from './Logo.module.scss'

const radius = 30

const Logo: FC = () => {
    const length = Math.PI * radius

    return <div className={styles.logo}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="50" cy="50" r={radius}
                stroke='#5AC97F'
                strokeWidth={20}
                fill='none'
            />
            <circle
                cx="50" cy="50" r={radius}
                stroke='#7A57E2'
                strokeWidth={20}
                fill='none'
                strokeDasharray={length}
                strokeDashoffset={length / 4}
            />
        </svg>
        <div>
            <span>Wayels</span>
            <div>Workspace</div>
        </div>
    </div>
}

export default Logo
