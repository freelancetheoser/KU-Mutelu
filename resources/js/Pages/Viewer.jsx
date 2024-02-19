import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import PanoramaViewer from "@/Layouts/PanoramaViewer";
import BackButton from "@/Components/BackButton";
import PrimaryButton from "@/Components/PrimaryButton";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Viewer(){

    const geojson = {
        'type': 'LocationCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Samphuraphajan',
                    'thainame': 'สามบูรพาจารย์',
                    'imageurl': './images/locations/sambhuraphajan',
                },
                'geometry': {
                    'type': 'Location',
                    'coordinates': [100.5730707, 13.8421697],
                    'url': '/sambhuraphajan'
                }
            },
        ]
    };

    const renderNames = () => {
        return geojson.features.map((feature, index) => (
            <p key={index} className="my-auto bg-[#005555] text-white text-center rounded-s-full px-12 py-2 font-extrabold truncate">
                {feature.properties.thainame}
            </p>
        ));
    };

    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="h-full w-full">
                <NavBar/>
                <hr />
                <div>
                    <div className="absolute z-50 flex space-x-4 w-full">
                        <div className="justify-start w-full my-auto ml-2">
                            <BackButton/>
                        </div>
                        <div className="justify-end w-full mt-2 max-w-[300px]">
                           {renderNames()}
                        </div>
                    </div>
                </div>
                <PanoramaViewer/>
                <div className='flex justify-center bottom-8'>
                    <PrimaryButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
                        </svg>
                        <span>เขียนคำอธิฐาน</span>
                    </PrimaryButton>
                </div>
                {/* <FloatingActionButton/> */}
            </div>
        </>
    )
}  