import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import UserPost from "@/Components/Card/UserPost";

export default function Home(){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar/>
            
            <hr />
            
            <article className="m-4 space-y-4">
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
            </article>
        </>
    )
}