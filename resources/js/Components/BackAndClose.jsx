import { Link } from "@inertiajs/react"
import BackButton from "@/Components/BackButton"

export default function BackAndClose() {
    return(
        <div className="grid grid-cols-2 w-full">
            <div className="m-2 flex justify-start">
                <BackButton/>
            </div>
            <div className="m-2 flex justify-end">
                <Link href="/samphuraphajan" className="text-white bg-[#005555] rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                </Link>
            </div>
        </div>
    )
}