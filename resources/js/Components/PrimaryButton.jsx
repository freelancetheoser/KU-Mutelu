import React, { useState } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (

        <button
            {...props}
            className={
                ` flex justify-center items-center space-x-2 text-white bg-gradient-to-r from-[#005555] to-[#069A8E] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
