import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Layouts/SearchBar";

export default function Home(){
    return (
        <>
            <Head title="KU-MUTELU"/>

            <NavBar/>
            <hr />
            <SearchBar/>
            <div>
                <span>บางเขน</span>
            </div>
            <hr />
            <Footer/>
        </>
    )
}  