export default function UserInfo() {
    return (
        <article className="flex space-x-4">
            <div id="profile" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                <img src="./test/user_profile.jpeg" alt="user_profile" className="w-12 rounded-full p-2"/>
            </div>
            <div id="texinfo">
                <span id="username">UserName</span><br />
                <span id="follwer">follower</span>
            </div>
            {/* <div className="justify-end mx-auto my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div> */}
        </article>
    )
}