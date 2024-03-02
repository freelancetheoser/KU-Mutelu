import { Link, Head, useForm } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Layouts/SearchBar";
import { useState , useEffect} from "react";
import MapBoxComponent from "@/Components/Mapbox";
import FloatingActionButton from "@/Components/FloatActionButton";
import SearchResult from "@/Components/SearchResult";

export default function Location({geojson, searchjson}){
    const {data, setData, post} = useForm({ locate: 'Bangkhen' });

    const handleLocationChange = (e) => {
        e.preventDefault();
        post(route('location.index'), data);
    };

    return (
        <div className="w-screen h-screen">
            <Head title="KU-MUTELU"/>
            <NavBar/>
            <hr />
            <SearchBar/>
            <form onSubmit={handleLocationChange} className="mb-2">
                <ul className="grid grid-cols-3 text-md font-bold">
                    <li className="flex justify-center">
                        <button type="submit" onClick={() => setData('location', 'Bangkhen')} className="text-gray-400 active:text-[#005555] focus:text-[#005555]" >บางเขน</button>
                    </li>
                    <li className="flex justify-center">
                        <button type="submit" onClick={() => setData('location', 'Kampansan')} className="text-gray-400 active:text-[#005555] focus:text-[#005555]" >กำแพงแสน</button>
                    </li>
                    <li className="flex justify-center">
                        <button type="submit" onClick={() => setData('location', 'Sriracha')} className="text-gray-400 active:text-[#005555] focus:text-[#005555]" >ศรีราชา</button>
                    </li>
                </ul>
            </form>

            {!geojson && <SearchResult searchjson={searchjson} />}
            {!searchjson && <MapBoxComponent geojson={geojson} />}

            <hr />
            <Footer/>
            <FloatingActionButton/>
        </div>
    )
}
