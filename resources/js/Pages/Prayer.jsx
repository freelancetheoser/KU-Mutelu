import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import UserPost from "@/Components/Card/UserPost";
import PaperPrayer from "@/Components/PaperPrayer";


export default function Post(){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar/>
            
            <PaperPrayer></PaperPrayer>
        </>
    )
}