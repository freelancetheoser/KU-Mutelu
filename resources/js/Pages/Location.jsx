import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Layouts/SearchBar";
import { useState , useEffect} from "react";
import MapBoxComponent from "@/Components/Mapbox";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Location({geojson}){
    const [locationData, setLocationData] = useState(null);

    const loadLocationData = (fileName) => {
        fetch(`public/Map/JSON/${fileName}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setLocationData(data))
            .catch(error => console.error("Failed to load location data: ", error));
    };

    const handleBangkhen = () => {
        post(route('location.index'),'Bangkhen')
    };

    const handleKampansan = () => {
        post(route('location.index'),'Kampansan')
    };

    const handleSriracha = () => {
        post(route('location.index'),'Sriracha')
    };
    
    return (
        <div className="w-screen h-screen">
            <Head title="KU-MUTELU"/>
            <NavBar/>
            <hr />
            <SearchBar/>
            <div className="mb-2">
                <ul className="grid grid-cols-3 text-md font-bold">
                    <li className="flex justify-center"><button onClick={() => handleBangkhen}className="text-gray-400 active:text-[#005555] focus:text-[#005555]">บางเขน</button></li>
                    <li className="flex justify-center"><button onClick={() => handleKampansan} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">กำแพงแสน</button></li>
                    <li className="flex justify-center"><button onClick={() => handleSriracha} className="text-gray-400 active:text-[#005555] focus:text-[#005555]">ศรีราชา</button></li>
                </ul>
            </div>
            <MapBoxComponent geojson={geojson}/>
            <hr />
            <Footer/>
            {/* <FloatingActionButton/> */}
        </div>
    )
}  