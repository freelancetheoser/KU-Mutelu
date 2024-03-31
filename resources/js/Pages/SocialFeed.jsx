import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";
import FramePost from "@/Components/Card/FramePost";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Social({auth , feedjson}){
    console.log(feedjson)
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar auth={auth}/>
            <Hotline feedjson={feedjson} auth={auth}/>
            <FramePost feedjson={feedjson}/>
            <FloatingActionButton/>
        </>
    )
}
