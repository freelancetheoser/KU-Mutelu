import { Link } from "@inertiajs/react"

export default function DonateContent() {
    
    const backgroundImageUrl = './Backgrounds/Background.png'; 

    return(
        <div className="w-full p-8 text-white"  style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-center text-xl font-bold mb-6">ร่วมบริจาค</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full font-semibold">
                <div className="mx-auto my-4  p-4">
                    <div className="space-y-1">
                        <p className="text-3xl font-bold">ร่วมสมทบทุนบริจาค</p>
                        <p className="text-xl font-bold">เพื่อสร้างโรงพยาบาลมหาวิทยาลัยเกษตรศาสตร์</p>
                    </div>
                    <br />
                    <p className="text-sm">เชิญร่วมเป็นส่วนหนึ่งของการสร้างอนาคตที่สดใสให้กับชุมชนของเรา ด้วยการบริจาคเพื่อสนับสนุนการสร้างโรงพยาบาลมหาวิทยาลัยเกษตรศาสตร์ </p>
                    <br />
                    <p className="text-sm">โรงพยาบาลนี้จะเป็นแหล่งความหวังและการรักษาที่สำคัญ ไม่เพียงแต่เป็นศูนย์กลางของการเรียนรู้และการวิจัยทางการแพทย์แห่งใหม่ แต่ยังเป็นที่พึ่งพาได้สำหรับผู้คนในชุมชนของเราที่ต้องการการดูแลทางการแพทย์ที่มีคุณภาพ </p>
                </div>
                <div className="flex justify-center">
                    <img src="./QR/Donate.png" alt="" className="object-contain rounded"/>
                </div>
                <div className="mx-auto my-4 w-full p-4">
                    <p className="text-sm">มาร่วมมือกันเพื่อสร้างอนาคตที่ดีกว่า การบริจาคของคุณไม่เพียงแต่เป็นการลงทุนในสุขภาพและการศึกษา แต่ยังเป็นการสร้างมรดกที่ยั่งยืนสำหรับรุ่นต่อไปด้วย</p>
                    <br />
                    <p className="text-sm">ร่วมมือกับเราวันนี้ เพื่อสร้างความเปลี่ยนแปลงที่มีความหมายและยั่งยืนในชุมชนของเรา</p>
                    <br />
                    <Link as="button" href={route('location')} 
                            className="flex justify-center mx-auto space-x-2 bg-transparent hover:bg-gradient-to-r from-teal-800 via-teal-500 to-green-400 animate-gradient text-teal-300 hover:text-white  rounded-full shadow py-2 px-4 mt-6 border border-teal-500 hover:border-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                            <   path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <p>
                                ติดต่อเพิ่มเติม
                            </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}