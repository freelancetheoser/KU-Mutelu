import { Link, Head, useForm } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Layouts/SearchBar";
import { useState , useEffect} from "react";
import MapBoxComponent from "@/Components/Mapbox";
import FloatingActionButton from "@/Components/FloatActionButton";
import axios from 'axios';
import { data } from "autoprefixer";

export default function Location({geojson}){
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
            <SearchBar />
            <form onSubmit={handleLocationChange} className="mb-2">
                <ul className="grid grid-cols-3 text-md font-bold">
                    <li className="flex justify-center">
                        <button type="submit" className="text-gray-400 active:text-[#005555] focus:text-[#005555]" onClick={() => setData('locate', 'Bangkhen')}>บางเขน</button>
                    </li>
                    <li className="flex justify-center">
                        <button type="submit" className="text-gray-400 active:text-[#005555] focus:text-[#005555]" onClick={() => setData('locate', 'Kampansan')}>กำแพงแสน</button>
                    </li>
                    <li className="flex justify-center">
                        <button type="submit" className="text-gray-400 active:text-[#005555] focus:text-[#005555]" onClick={() => setData('locate', 'Sriracha')}>ศรีราชา</button>
                    </li>
                </ul>
            </form>
            <MapBoxComponent geojson={geojson}/>
            <hr />
            <Footer/>
            {/* <FloatingActionButton/> */}
        </div>
    )
}  