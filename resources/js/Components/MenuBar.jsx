import { Link } from "@inertiajs/react";

export default function MenuBar() {
    return (
        <article className="flex justify-center space-x-12">
            <div className="h-72 w-40 bg-gradient-to-br from-green-400 via-teal-500 to-sky-800 drop-shadow-lg rounded-xl opacity-75">
                <img src="./test/Green.png" alt="" className="w-full bg-white rounded-t-xl"/>
                <div className="mx-auto p-4">
                    <h1 className="text-white text-base font-bold">
                        3dvista
                    <hr />

                    <p className="text-xs hyphens-auto">google street view of kasetsart university</p>
                    <Link className="font-light underline hover:underline-offset-4 rounded-lg px-4"> <p className="text-center">more</p> </Link>
                    </h1>
                </div>
            </div>
            <div className="h-72 w-40 bg-gradient-to-br from-green-400 via-teal-500 to-sky-800 drop-shadow-lg rounded-xl opacity-75">
                <img src="./test/Blue.png" alt="" className="w-full bg-white rounded-t-xl"/>
                <div className="mx-auto p-4">
                    <h1 className="text-white text-base font-bold">
                        Metaverse
                    <hr />

                    <p className="text-xs hyphens-auto">World 3D model by kasetsart university</p>
                    <Link className="font-light underline hover:underline-offset-4 rounded-lg px-4"> <p className="text-center">more</p> </Link>
                    </h1>
                </div>
            </div>
            <div className="h-72 w-40 bg-gradient-to-br from-green-400 via-teal-500 to-sky-800 drop-shadow-lg rounded-xl opacity-75">
                <img src="./test/Purple.png" alt="" className="w-full bg-white rounded-t-xl"/>
                <div className="mx-auto p-4">
                    <h1 className="text-white text-base font-bold">
                        Shop
                    <hr />

                    <p className="text-xs hyphens-auto">Find products and contact the seller directly.</p>
                    <Link className="font-light underline hover:underline-offset-4 rounded-lg px-4"> <p className="text-center">more</p> </Link>
                    </h1>
                </div>
            </div>
        </article>
    )
}