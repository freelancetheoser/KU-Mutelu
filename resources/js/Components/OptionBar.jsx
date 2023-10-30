import { Link } from "@inertiajs/react";

export default function OptionBar(){
    return(
        <div className="min-h-screen bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
            <div className="container flex justify-center">
                <div className="max-w-sm py-20">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="rounded-t-lg" src="https://i.pinimg.com/564x/b6/e0/1b/b6e01b2887c7118dfa3924d7941d5989.jpg" alt="" />
                        <div className="py-6 px-8 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">3DVISTA</h1>
                        <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                        <Link href="/home"><button className="bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">Enter</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex justify-center">
                <div className="max-w-sm py-20">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="rounded-t-lg" src="https://i.pinimg.com/564x/31/c9/2d/31c92da34ccb3ea1b26c07ea869c6802.jpg" alt="" />
                        <div className="py-6 px-8 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">METAVERSE</h1>
                        <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                        <Link href="/home"><button className="bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">Enter</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex justify-center">
                <div className="max-w-sm py-20">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="rounded-t-lg" src="https://i.pinimg.com/564x/e4/e2/17/e4e217a1273f556d6da58950a9929fe8.jpg" alt="" />
                        <div className="py-6 px-8 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">SHOP</h1>
                        <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                        <Link href="/shopkmu"><button className="bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-500 hover:text-white  rounded shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">Enter</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}