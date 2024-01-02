export default function GuestButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-[#A1E3D8] border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
