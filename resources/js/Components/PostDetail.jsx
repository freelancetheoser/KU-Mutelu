import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useForm } from '@inertiajs/react';

export default function PostDetail ({image, content, user, postId, comments, feedjson, title}) {
    const { data, post, setData} = useForm({
        post_id: postId,
        content: '',
      });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('comment.store'), data);

        console.log('Submitting content :', data);
    };

    const handleCallComment = (e) => {
        e.preventDefault();
        post(route('comment.index'), data);
    }

    console.log(comments)
    const renderedComments = comments.map((comment, index) => (
        <div key={index} className='flex justify-start space-x-2 my-4 overflow-y-auto'>
            <div className='flex justify-center items-center text-gray-500'>
                {/* <img src={comment.user.imageProfile} className='rounded-full h-8 w-8' alt="userProfile" />
                 */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </div>
            <div>
                <h1>{comment.user.username}</h1>
                <p className='text-sm'>
                    {comment.content}
                </p>
            </div>
        </div>
    ));



    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
            <button   className="m-4 inline-flex h-[35px] items-center justify-center rounded-[4px] font-medium leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                </svg>
            </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                {title}
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                <img src={image} alt="" className='rounded'/><br />
                {content}
                <div className="flex overflow-auto">
                    <div className='w-full max-h-24 m-2 flex-shrink-0 '>
                        {renderedComments}
                    </div>
                </div>
                </Dialog.Description>
                <div className='flex justify-center item-center space-x-4'>
                    <fieldset className="mb-[15px] flex items-center gap-5 w-3/4">
                    <input
                        className="placeholder-teal-500  text-violet11 shadow-teal-500 focus:shadow-teal-500 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="content"
                        type="text"
                        name="content"
                        value={data.content}
                        placeholder='เขียนเพื่อแสดงความคิดเห็น'
                        onChange={(e) => setData('content', e.target.value)}
                    />
                    </fieldset>

                    <Dialog.Close asChild>
                        <button onClick={handleSubmit} className="bg-gradient-to-r from-[#005555] to-[#069A8E] text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                            </svg>
                        </button>
                    </Dialog.Close>

                </div>

                <Dialog.Close asChild>
                <button
                    className="hover:bg-gradient-to-r from-[#005555] to-[#069A8E] hover:text-white focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                >
                    <Cross2Icon />
                </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
