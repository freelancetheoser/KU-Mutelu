import { Link } from "@inertiajs/react";
import BackandClose from "@/Components/BackAndClose"

export default function PaperPrayer(){

    return(
        <div className="space-y-8">
            <BackandClose/>
            <div className="pl-16 ">
                <div className="w-full h-4/6 bg-gradient-to-r from-[#005555] to-[#069A8E]">
                    <div className="">
                        <div className="flex justify-start px-8 py-16">
                            <div className="bg-white rounded-full p-4 mr-4"></div>
                            <p className="text-white text-lg font-bold my-auto">กำลังเขียน</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8 space-y-2">
                <span className="text-[#005555] font-bold">เขียนคำอธิษฐานหรือคำมั่นสัญญาของคุณ</span>
                <div className="w-full">
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="เขียนอะไรสักอย่าง..."></textarea>
                </div>
                <div className="flex justify-end text-[#005555] w-full">
                    <Link href="/prepost"
                    className="flex justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                        <span className="font-bold">เขียน</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}