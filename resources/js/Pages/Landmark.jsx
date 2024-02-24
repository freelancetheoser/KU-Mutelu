import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import PanoramaViewer from "@/Layouts/PanoramaViewer";
import BackButton from "@/Components/BackButton";
import PrimaryButton from "@/Components/PrimaryButton";
import FloatingActionButton from "@/Components/FloatActionButton";
import Wish from "@/Layouts/Wish";
import LandmarkInfo from "@/Components/Info";
import WishForm from "@/Layouts/Wish";
import CreateWishComponent from "@/Layouts/Wish";

export default function Viewer({landmark}){

    const renderNames = () => {
        return (
            <p className="bg-[#005555] text-white text-center rounded-s-full px-12 py-2 font-extrabold truncate">
                {landmark.feature.properties.thainame}
            </p>
            )
        ;
    };

    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="flex flex-col w-full h-screen">
                <div className="flex-grow">
                    <PanoramaViewer landmark={landmark}/>
                </div>
                <div className="absolute z-10 w-full">
                    <NavBar/>
                    <div className="absolute my-auto z-50 pt-2 flex space-x-4 w-full">
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
                </div>

                <FloatingActionButton/>
            </div>
        </>
    )
}
