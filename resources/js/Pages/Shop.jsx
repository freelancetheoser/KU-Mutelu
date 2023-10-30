import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import ShopItem from "@/Components/Card/ShopItem";

export default function Shop(){
    return (
        <>
            <Head title="KU-MUTELU"/>

            <NavBar/>
            <hr />
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <hr />
            <Footer/>
        </>
    )
}  