import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function SearchResult({ searchjson }) {
    // Log the searchjson to the console to verify the structure
    console.log(searchjson);

    return (
        <div className="mx-4 flex justify-center items-center">
            {searchjson && searchjson.features.length > 0 ? (
                <div className="w-full p-2">
                    {searchjson.features.map((feature, index) => (
                        <div key={index} className="flex space-x-4">
                            <div className="flex justify-center items-center">
                                <img src={feature.properties.imageurl+".webp"} alt="Landmark_Image" className="h-24 w-24 rounded" />
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <h1 className="text-xl font-bold">{feature.properties.thai_name}</h1>
                                    <div className="flex items-center text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>
                                        <span className="text-gray-500"> {feature.location.name}</span>
                                    </div>
                                </div>
                                <div>
                                    <Link href={'/landmark/'+ feature.properties.name} className="text-white text-sm rounded-full py-2 px-4 bg-gradient-to-r from-[#005555] to-[#069A8E]">
                                        เข้าชม
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // เพิ่มเงื่อนไขแสดงข้อความ เมื่อไม่มีข้อมูล
                <p className="text-gray-500 text-center py-4">ไม่พบสถานที่</p>
            )}
        </div>
    );
}
