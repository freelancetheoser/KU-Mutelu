import React, { useState } from 'react';
import NavBar from "@/Layouts/NavBar";
import FramePost from "@/Components/Card/FramePost";
import TextPost from "@/Components/Card/TextPost";

export default function MuProfile() {

    const username = "Fr_1ance";
    const userbio = "ติดต่อซื้อกำไรได้นะคับ";
    const [activePostType, setActivePostType] = useState('frame'); // 'frame' หรือ 'text'


    return(
        <div>
            <NavBar/>
            <div>
                <div className="flex justify-center mb-4">
                    <div className="space-y-4">
                        <div className="w-full">
                            <div className="p-2 rounded-full border-4 border-teal-500">
                                <img src="./UserProfile/User-1.jpeg" alt="" className="w-32 h-32 rounded-full"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-center text-black text-xl font-bold">{username}</p>
                            <p className="text-center">{userbio}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 ">
                        <ul className="grid grid-cols-2 text-md font-bold">
                            <li className="flex justify-center">
                                <button onClick={() => setActivePostType('text')} className="space-y-4 text-gray-400 active:text-[#005555] focus:text-[#005555]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </button>
                            </li>
                            <li className="flex justify-center">
                                <button onClick={() => setActivePostType('frame')} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        {activePostType === 'frame' && <FramePost/>}
                        {activePostType === 'text' && <TextPost/>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}