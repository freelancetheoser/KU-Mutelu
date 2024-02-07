import ApplicationLogo from '@/Components/ApplicationLogo';
import HostPost from '@/Components/Card/HotPost';
import { Link } from '@inertiajs/react';

export default function Hotline({ children }) {
    return (
        <div className='w-full flex justify-start'>
            <HostPost/>
            <HostPost/>
            <HostPost/>
            <HostPost/>
            <HostPost/>
            <HostPost/>
            <HostPost/>
        </div>
    );
}
