import { FC } from 'react'
import SearchTracking from './search-tracking/SearchTracking'

const Header: FC = () => {
    return <div className='z-10   w-full h-20'>
        <SearchTracking />
    </div>
}

export default Header
