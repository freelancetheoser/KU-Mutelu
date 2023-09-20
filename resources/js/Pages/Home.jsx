import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import ContactBar from "@/Components/ContactBar";
import MenuBar from "@/Components/MenuBar";

export default function Home(){
    return (
        <>
            <Head title="KU-MUTELU"/>

            <NavBar/>
            <hr />
            <article className="flex justify-center space-x-24 p-12">
                <div className="my-auto">
                    <span className="font-extrabold text-4xl bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        KU-Mutelu <br />
                    </span>
                    <span>
                        New social media <br />
                    </span>
                    <span>
                        by kasetsart university <br />
                    </span>
                </div>
                <div>
                    <img src="./test/logo.png" alt="iconic" className="bg-cover w-60 h-60 rounded-full hover:"/>
                    {/* <div className="bg-teal-800 opacity-90 rounded-full w-60 h-60"></div> */}
                </div>
            </article>
            <div className="space-y-12">
                <MenuBar/>
                <ContactBar/>
            </div>

        </>
    )
}  