export default function Gorikuya(props) {
    return(
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 space-x-4 place-items-center space-y-2">
            <div className="w-64 h-48 clip-polygon bg-gradient-to-r from-[#005555] to-[#069A8E]"
            style={{ backgroundImage: props.background, aspectRatio: '1 / 1' }} // ใช้ gradient ที่นี่
            >
                <div className="flex justify-center w-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                </div>
                <div className="h-32 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>
                </div>
            </div>
            <div className="w-64 h-48 clip-polygon bg-gradient-to-r from-[#005555] to-[#069A8E]"
            style={{ backgroundImage: props.background, aspectRatio: '1 / 1' }} // ใช้ gradient ที่นี่
            >
                <div className="flex justify-center w-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                </div>
                <div className="h-32 flex justify-center items-center">
                    <div>
                        <div className="flex justify-center">
                            <div className="bg-white h-12 w-12 rounded">

                            </div>
                        </div>
                        <div className="w-48">
                            <p id={props.text} className="mx-2 mt-2 text-white text-[0.5rem] w-48 h-16 line-clamp-4">{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
