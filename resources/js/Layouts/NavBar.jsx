import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function NavBar({auth}) {


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

                                <Dropdown.Link href={route('profile.showprofile')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Edit Profiel</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
        </nav>

    )
}
