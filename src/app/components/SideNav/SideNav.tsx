"use client"
import React, { useState, useEffect, useRef } from 'react';

const SideNav = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [isNavOpen, setIsNavOpen] = useState(isSmallScreen ? false : true); // Default open state for larger screens
    const sidebarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Function to check screen size
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSmallScreen(window.innerWidth <= 768); // Adjust the width as needed
                setIsNavOpen(false)
            }
            else {
                setIsNavOpen(true)
                setIsSmallScreen(false)
            }
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isSmallScreen &&
                isNavOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSmallScreen, isNavOpen]);

    const toggleNav = () => {
        console.log("open", isNavOpen)
        setIsNavOpen(!isNavOpen);
    };


    const SideNavBarCompoenent: any = () => {
        return (
            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`${isNavOpen ? 'translate-x-0' : '-translate-x-full'
                    } relative z-40 w-64  inset-y-0 left-0 h-screen transition-transform text-white bg-gradient-to-b from-zinc-900`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-[#262B32] text-white">
                    <ul className="space-y-5 font-medium">
                        <li>
                            <a href="/Projects" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 text-white group-hover:text-gray-900">Add Task</span>
                            </a>
                        </li>
                        <li>
                            <a href="dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-gray-900">View Tasks</span>
                                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        )
    }

    return (
        <>
            {/* {console.log("isSmallScreen", isSmallScreen, isNavOpen)} */}
            {/* Show burger icon only on small screens */}
            {isSmallScreen && !isNavOpen && (
                // Show burger icon only on small screens
                <button
                    onClick={toggleNav}
                    aria-expanded={isNavOpen}
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            )}

            {(isSmallScreen && isNavOpen &&
                <SideNavBarCompoenent />
            )}
            {!isSmallScreen && (
                <SideNavBarCompoenent />
            )}

        </>
    );
};

export default SideNav;