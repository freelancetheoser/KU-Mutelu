import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";

export default function Social(){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div>
                <NavBar/>
                <Hotline/>
            </div>
        </>
    )
}