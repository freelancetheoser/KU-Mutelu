import { Link } from "@inertiajs/react";
import BackButton from "@/Components/BackButton";
// import BackAndClose from "@/Components/BackandClose";
import NavBar from "@/Layouts/NavBar";
import PaperShow from "@/Components/PaperShow";
import PostContent from "@/Components/PostContent";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Prepost() {
    return(
        <div>
            <NavBar/>
            <BackAndClose/>
            <div className="space-y-8">
                <PaperShow/>
                <PostContent/>
            </div>
            <FloatingActionButton/>
        </div>
    )
}