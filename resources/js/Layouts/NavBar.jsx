import { Link } from "@inertiajs/react"

export default function NavBar() {
    
    return(

        <nav className="border-gray-200" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="./test/logo.png" className="w-12 mr-3" alt="Logo" />
                <span className="self-center bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 text-transparent bg-clip-text animate-gradient text-2xl font-semibold whitespace-nowrap">KU-MUTELU</span>
            </a>
            <div className="flex items-center md:order-2 m-4">
                <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <img src="./test/user_profile.jpeg" alt="user_profile" className="w-10 rounded-full p-2"/>
                </button>
                {/* Dropdown menu */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow border-solid border-1 border-gray-200" id="user-dropdown">
                    {/* <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div> */}
                    <ul className="py-2 w-48" aria-labelledby="user-menu-button">
                        <li>
                            <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ค้นหา</Link>
                        </li>
                        <li>
                            <Link href="/post" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">แก้บน</Link>
                        </li>
                        <li>
                            <Link href="/Location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">3D Vista</Link>
                        </li>
                        <li>
                            <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ออกจากระบบ</Link>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link href="/home" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">
                            ค้นหา
                        </Link>
                    </li>
                    <li>
                        <Link href="/post" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                            แก้บน
                        </Link>
                    </li>
                    <li>
                        <Link href="/location" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                            3D VISTA
                        </Link>
                    </li>
                    <li>
                        <Link href="/register" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                            สมัครสมาชิก
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                            เข้าสู่ระบบ
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
}