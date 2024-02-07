import PostContent from "./PostContent";

export default function PaperShow(){
    return(
        <div>
            <div className="flex justify-center w-full">
                <div className="w-2/6 h-3/6 bg-gradient-to-r from-[#005555] to-[#069A8E] papersize">
                    <div className="flex justify-center">
                        <div className="flex justify-center my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center text-white">
                        <p className="vertical-text">ขอให้การนำเสนอผ่านไปได้ด้วยดี</p>
                    </div>
                </div>
            </div>
        </div>
    )
}