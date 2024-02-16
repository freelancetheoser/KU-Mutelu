import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import ContactBar from "@/Components/ContactBar";
import MenuBar from "@/Components/MenuBar";
import Footer from "@/Layouts/Footer";
import Landing from "@/Components/Landing";
import OptionBar from "@/Components/OptionBar";
import SearchBar from "@/Layouts/SearchBar";
import { useState } from "react";
import MapBoxComponent from "@/Components/Mapbox";

export default function Location(){
    const [embedurl, setEmbedUrl] = useState("https://www.google.com/maps/d/u/0/embed?mid=1eddbxfVDPCaQNo2YQJdzr3iV08D-1vk&ehbc=2E312F&noprof=1");

    // const handleBangkhen = () => {
    //     setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1eddbxfVDPCaQNo2YQJdzr3iV08D-1vk&ehbc=2E312F&noprof=1");
    // };

    // const handleKampansan = () => {
    //     setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1kSv8vxAqdVsoJzBlWaHEjfYr-PpVMF4&ehbc=2E312F&noprof=1");
    // };

    // const handleSriracha = () => {
    //     setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1JWr_UTPfJq8IhD5NncypWpBI5d2Qdtw&ehbc=2E312F&noprof=1");
    // };

    const handleBangkhen = () => {
        setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1eddbxfVDPCaQNo2YQJdzr3iV08D-1vk&ehbc=2E312F");
    };
    
    const handleKampansan = () => {
        setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1kSv8vxAqdVsoJzBlWaHEjfYr-PpVMF4&ehbc=2E312F&noprof=1&pb=https://example.com/kampansan_image.jpg");
    };
    
    const handleSriracha = () => {
        setEmbedUrl("https://www.google.com/maps/d/u/0/embed?mid=1JWr_UTPfJq8IhD5NncypWpBI5d2Qdtw&ehbc=2E312F&noprof=1&pb=https://example.com/sriracha_image.jpg");
    };
    
    return (
        <div className="w-screen h-screen">
            <Head title="KU-MUTELU"/>
            <div className="">
                <NavBar/>
                <hr />
                <SearchBar/>
                <div className="mb-2">
                    <ul className="grid grid-cols-3 text-md font-bold">
                        <li className="flex justify-center"><button onClick={handleBangkhen} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">บางเขน</button></li>
                        <li className="flex justify-center"><button onClick={handleKampansan} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">กำแพงแสน</button></li>
                        <li className="flex justify-center"><button onClick={handleSriracha} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">ศรีราชา</button></li>
                    </ul>
                </div>
                <div className="w-full">
                    <MapBoxComponent/>
                </div>
            </div>
            <hr />
            <Footer/>
        </div>
    )
}  