import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import PanoramaViewer from "@/Layouts/Bamboo/PanoramaViewer";
import BackButton from "@/Components/BackButton";
import FloatingActionButton from "@/Components/FloatActionButton";
import LandmarkInfo from "@/Components/Info";
import WishForm from "@/Layouts/WishForm";
import MakeVowWish from "@/Layouts/MakeVowWish";

export default function Viewer({landmark, auth}){

    const renderNames = () => {
        return (
            <p className="bg-[#005555] text-white text-center rounded-s-full px-12 py-2 font-extrabold truncate">
                {landmark.feature.properties.thainame}
            </p>
            )
        ;
    };
    console.log(landmark);

    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="flex flex-col w-full h-screen">
                <div className="flex-grow">
                    <PanoramaViewer landmark={landmark}/>
                </div>
                <div className="absolute z-20 w-full">
                    <NavBar auth={auth}/>
                    <div className="absolute my-auto z-10 pt-2 flex space-x-4 w-full">
                        <div className="justify-start my-auto w-full  ml-2">
                            <BackButton/>
                        </div>
                        <div className="justify-end w-full max-w-[300px]">
                            {renderNames()}
                        </div>
                    </div>
                </div>
                <hr />

                <div className="flex justify-center absolute z-10 bottom-10 w-full space-x-4 ">
                    <LandmarkInfo landmark={landmark}/>
                    <WishForm landmark={landmark}/>
                    <MakeVowWish landmark={landmark}/>
                </div>

                <FloatingActionButton/>
            </div>
        </>
    )
}
