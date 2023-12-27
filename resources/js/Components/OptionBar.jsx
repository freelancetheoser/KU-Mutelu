import { Link } from "@inertiajs/react";

export default function OptionBar(){
    return(
        <div className="bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
            <div className="container flex justify-center my-12">
                <div className="max-w-sm">
                    <div className="bg-white relative shadow-lg hover:shadow-xl  transition duration-500 rounded-lg">
                        <div className="overflow-hidden rounded-t-lg h-80">
                            <img className="object-cover object-center w-full h-full" src="./OptionBar/3DVista.png" alt="" />
                        </div>
                        <div className="py-6 px-8 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">3DVISTA</h1>
                        <p className="text-gray-700 tracking-wide">เข้าถึงสถานที่ตามความเชื่อโดยไม่ต้องเสียเวลาเดินทาง</p>
                        <Link href="/Location">
                            <button className="flex justify-center space-x-2 bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                </svg>
                                <p>
                                    เข้าชม
                                </p>
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex justify-center my-12">
                <div className="max-w-sm">
                    <div className="bg-emerald-300 relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <div className="overflow-hidden rounded-t-lg h-80">
                            <img className="object-cover object-center w-full h-full" src="./OptionBar/Social.png" alt="" />
                        </div>
                        <div className="py-6 px-8 rounded-b-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Social</h1>
                        <p className="text-gray-700 tracking-wide">โพสต์รูปสถานแปลกใหม่ที่เกี่ยวกับสายมู เพื่อให้ทุกคนได้รู้</p>
                        <Link href="/Social">
                            <button className="flex justify-center space-x-2 bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                </svg>
                                <p>
                                    เข้าชม
                                </p>
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}