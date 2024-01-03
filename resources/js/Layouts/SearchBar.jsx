import { Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

export default function SearchBar(){
    return(
        <div className="flex w-full space-x-4 p-4">
            <form className="w-full" action="">
                <div className="flex space-x-2">
                    <div className="w-full">
                        <TextInput
                            id="location"
                            type="text"
                            placeholder="ค้นหา: สถานที่"
                            className="mt-1 block w-full rounded border border-teal-500 font-bold placeholder-teal-500"
                        />
                    </div>            
                    <button className="flex justify-center space-x-2 rounded-full bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 border border-teal-500 hover:border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <p>
                            ค้นหา
                        </p>
                    </button>
                </div>
            </form>
        </div>
        
    );
}