export default function ApplicationLogo(props) {
    return (
        <a href="/home" className="flex items-center">
            <img src="/Logo.png" className="w-14 mr-3" alt="Logo" />
            <span className="self-center bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 text-transparent bg-clip-text animate-gradient text-2xl font-semibold whitespace-nowrap">KU-MUTELU</span>
        </a>
    );
}
