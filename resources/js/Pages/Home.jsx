import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import Landing from "@/Components/Landing";
import OptionBar from "@/Components/OptionBar";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Home({ auth }){
    console.log(auth);
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar auth={auth}/>
            <Landing/>
            <OptionBar/>
            <hr />
            <Footer/>
            <FloatingActionButton/>
        </>
    )
}
