import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import ContactBar from "@/Components/ContactBar";
import MenuBar from "@/Components/MenuBar";
import Footer from "@/Layouts/Footer";
import Landing from "@/Components/Landing";
import OptionBar from "@/Components/OptionBar";
import SearchBar from "@/Layouts/SearchBar";

export default function Home(){
    return (
        <>
            <Head title="KU-MUTELU"/>

            <NavBar/>
            <hr />
            <SearchBar/>
            <hr />
            <Footer/>
        </>
    )
}  