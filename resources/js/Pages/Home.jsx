import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import ContactBar from "@/Components/ContactBar";
import MenuBar from "@/Components/MenuBar";
import Footer from "@/Layouts/Footer";
import Landing from "@/Components/Landing";
import OptionBar from "@/Components/OptionBar";

export default function Home(){
    return (
        <>
            <Head title="KU-MUTELU"/>

            <NavBar/>
            <hr />
            <Landing/>

            <div className="space-y-12">
                <ContactBar/>
            </div>
            <OptionBar/>
            <hr />
            <Footer/>
        </>
    )
}  