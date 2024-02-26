import Paper from "@/Components/Card/Paper"

export default function Template() {

    const shapes = ['circle-shape', 'rhombuse-shape', 'house-shape', 'paper-shape']
    const icon_templates = ['paper', 'ama']

    return (
        <div>
            <h1 className='text-xl font-bold'>รูปแบบการ์ดอธิษฐาน</h1>
            <div className="overflow-x-auto flex">
                <form className="min-w-screen space-x-4 flex">
                    <div className="w-full my-4">
                        <div className="flex justify-center items-center border-2 border-gray-100 w-32 h-32 rounded shadow-lg px-4">
                            <img src="./images/Icon_Templates/paper.png" alt=""/>
                        </div>
                        <div className="flex justify-center mt-4">
                            <input type="radio" id="paper" name="fav_language" value="paper"></input>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <div className="flex justify-center items-center border-2 border-gray-100 w-32 h-32 rounded shadow-lg px-4">
                            <img src="./images/Icon_Templates/ama.png" alt=""/>
                        </div>
                        <div className="flex justify-center mt-4">
                            <input type="radio" id="ama" name="fav_language" value="ama"></input>
                        </div>
                    </div>
                </form>
            </div>
            <h1 className='text-xl font-bold'>รูปแบบลายบนการ์ด</h1>
            <div className="overflow-x-auto flex">
                <form className="min-w-screen space-x-4 flex">
                    <div className="w-full my-4">
                        <div className="flex justify-center items-center border-2 border-gray-100 w-32 h-32 rounded shadow-lg px-4">
                            <img src="./images/Icon_Templates/paper.png" alt=""/>
                        </div>
                        <div className="flex justify-center mt-4">
                            <input type="radio" id="paper" name="fav_language" value="paper"></input>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <div className="flex justify-center items-center border-2 border-gray-100 w-32 h-32 rounded shadow-lg px-4">
                            <img src="./images/Icon_Templates/ama.png" alt=""/>
                        </div>
                        <div className="flex justify-center mt-4">
                            <input type="radio" id="ama" name="fav_language" value="ama"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
