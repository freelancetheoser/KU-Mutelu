import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function NavBar({auth}) {


    const backgroundImageUrl = './Backgrounds/Background.png';
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return(
        <nav className="flex justify-between px-4 sm:px-6 lg:px-8 w-full h-16 text-right  bg-white ">
            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />

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
