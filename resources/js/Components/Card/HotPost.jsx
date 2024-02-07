import { Link } from "@inertiajs/react"

export default function HostPost() {
    const userProfile = [
        "./UserProfile/User-1.jpeg",
        "./UserProfile/User-2.jpeg",
        "./UserProfile/User-3.jpeg",
        "./UserProfile/User-4.jpeg",
        "./UserProfile/User-5.jpeg",
        "./UserProfile/User-6.jpeg",
        "./UserProfile/User-7.jpeg",
    ];

    return (
        // ใช้ overflow-auto และ flex-nowrap เพื่อไม่ให้รูปภาพขึ้นบรรทัดใหม่และสามารถเลื่อนดูได้
        <div className="flex flex-nowrap overflow-auto">
            {userProfile.map((src, index) => (
                <Link key={index} href="#" className="w-16 h-16 m-2 flex-shrink-0 overflow-hidden rounded-full border-2 border-teal-500">
                    <img src={src} alt={`User profile ${index + 1}`} className="w-full h-full object-cover" />
                </Link>
            ))}
        </div>
    );
}
