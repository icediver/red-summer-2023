import { FC } from 'react'
import SearchTracking from './search-tracking/SearchTracking'

const Header: FC = () => {
    return <div className='z-10 py-4 px-8 w-full h-20'>
        <SearchTracking />
    </div>
}

export default Header
