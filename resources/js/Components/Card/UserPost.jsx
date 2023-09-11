import { Link } from "@inertiajs/react";
import UserInfo from "../Post/UserInfo";
import PostAction from "../Post/PostAction";
import PostLike from "../Post/PostLike";

export default function UserPost() {
    return (
        <article id="post" className="flex justify-center">
            <div className="space-y-2">   
                <UserInfo/>
                <div id="imagepost">
                    <img src="./test/Post.jpeg" alt="" className="bg-cover w-full h-60 rounded-md"/>
                </div>
                <PostAction/>
                <PostLike/>
                <span className="px-2">view all 13 comments</span>
                <hr />
            </div>
        </article>
    )
}