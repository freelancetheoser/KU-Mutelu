import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import PostForm from './PostForm';


export default function Hotline({ feedjson, auth }) {
    const top10 = feedjson.top10;   
    const userProfile = [
        "./UserProfile/User-1.jpeg",
        "./UserProfile/User-2.jpeg",
        "./UserProfile/User-3.jpeg",
        "./UserProfile/User-4.jpeg",
        "./UserProfile/User-5.jpeg",
        "./UserProfile/User-6.jpeg",
        "./UserProfile/User-7.jpeg",
        "./UserProfile/User-7.jpeg",
        "./UserProfile/User-7.jpeg",
        "./UserProfile/User-7.jpeg",
    ];

    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-nowrap overflow-auto">
                <PostForm auth={auth}/>
                {top10.map((top10, index) => (
                    <Link key={index} href="#" className="w-16 h-16 m-2 flex-shrink-0  overflow-hidden rounded-full border-2 border-teal-500">
                        <img src={top10.properties.imagePost} alt={`top10 ${index + 1}`} className="w-full h-full object-cover" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
