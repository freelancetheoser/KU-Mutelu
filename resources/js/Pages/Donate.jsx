import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import FloatingActionButton from "@/Components/FloatActionButton";
import DonateContent from "@/Content/DonateContent";
import Footer from "@/Layouts/Footer";

export default function Donate({auth}){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div>
                <NavBar auth={auth}/>
                <DonateContent/>
                <FloatingActionButton/>
                <Footer/>
            </div>
        </>
    )
}
