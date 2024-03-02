import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function NavBar({auth}) {

    console.log(auth)

    const backgroundImageUrl = './Backgrounds/Background.png';
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return(
        <nav className="flex justify-between w-full h-16 text-right sm:fixed sm:top-0 sm:right-0 bg-white absolute z-50">
            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
            <div className="flex items-center  mx-auto ">
                <ul className="flex font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link href="/home" className="block py-2 pl-3 pr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm md:p-0" aria-current="page">
                            หน้าหลัก
                        </Link>
                    </li>
                    <li>
                        <Link href="/donate" className="block py-2 pl-3 pr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm md:p-0">
                            โดเนท
                        </Link>
                    </li>
                    <li>
                        <Link href="/location" className="block py-2 pl-3 pr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm md:p-0">
                            3D VISTA
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center mx-4'>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="hidden font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
                <div className={`${auth.user ? "sm:flex sm:items-center sm:ml-6" : "hidden"}`}>
                    <div className="ml-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        // style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <img src={backgroundImageUrl} className='h-12 w-12 rounded-full' alt="" />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>

                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
        </nav>

        // <nav className="bg-white border-gray-200" >
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        //     <a href="/home" className="flex items-center">
        //         <img src="/Logo.png" className="w-14 mr-3" alt="Logo" />
        //         <span className="self-center bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 text-transparent bg-clip-text animate-gradient text-2xl font-semibold whitespace-nowrap">KU-MUTELU</span>
        //     </a>
        //     <div className="flex items-center md:order-2 m-4">
        //         <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        //             <span className="sr-only">Open user menu</span>
        //             <img src="/test/user_profile.jpeg" alt="user_profile" className="w-10 rounded-full p-2"/>
        //         </button>
        //         {/* Dropdown menu */}
        //         <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow border-solid border-1 border-gray-200" id="user-dropdown">
        //             <ul className="py-2 w-48" aria-labelledby="user-menu-button">
        //                 <li>
        //                     <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ค้นหา</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/post" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">โดเนท</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/Location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">หน้าโปรไฟล์</Link>
        //                 </li>
        //                 <li>
        //                     <Link method="post" href={route('logout')} as="button" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ออกจากระบบ</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        //             </svg>
        //         </button>
        //     </div>
        //     <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto" id="navbar-user">
        //         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        //             <li>
        //                 <Link href="/home" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">
        //                     หน้าหลัก
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href="/donate" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
        //                     โดเนท
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href="/location" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
        //                     3D VISTA
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href="/register" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
        //                     สมัครสมาชิก
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href="/login" className="block py-2 pl-3 pr-4 font-bold zinc-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
        //                     เข้าสู่ระบบ
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        //     </div>
        // </nav>

    )
}
