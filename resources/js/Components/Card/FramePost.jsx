import React, { useState, useEffect } from 'react';
import PostDetail from '../PostDetail';
import { Link } from '@inertiajs/react';

export default function FramePost({ feedjson }) {
    const features = feedjson.features;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    console.log(features);

    return(
        <div className='w-full grid grid-cols-1 place-items-center'>
            {features.map((feature, index) => {
                const [liked, setLiked] = useState(false);

                useEffect(() => {
                    // เมื่อคอมโพเนนต์ถูกโหลดครั้งแรก ตรวจสอบว่ามีข้อมูลใน localStorage หรือไม่
                    const storedLiked = localStorage.getItem(`liked_${feature.properties.post_id}`);
                    if (storedLiked) {
                        // ถ้ามี ให้ใช้ข้อมูลที่มีอยู่ใน localStorage เพื่ออัปเดต state
                        setLiked(JSON.parse(storedLiked));
                    }
                }, []); // useEffect นี้จะทำงานเฉพาะครั้งแรกที่คอมโพเนนต์ถูกโหลดเท่านั้น

                const handleLike = (e) => {
                    setLiked(true);
                    localStorage.setItem(`liked_${feature.properties.post_id}`, true);

                    // e.preventDefault();

                    const post = e.target.closest('.feedpost');
                    post.scrollIntoView({ behavior: 'smooth' });
                };

                const handleUnlike = (e) => {
                    setLiked(false);
                    localStorage.setItem(`liked_${feature.properties.post_id}`, false);

                    // e.preventDefault();

                    const post = e.target.closest('.feedpost');
                    post.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                    <div className="feedpost bg-cover bg-center rounded-lg p-4 shadow-inner my-4"
                        key={feature.properties.post_id}
                        style={{ backgroundImage: `url(${feature.properties.imagePost})` }}>
                        <div id={feature.user.user_id} className="feedpostsize border-solid border-4 border-white rounded-lg flex flex-col justify-between">
                            <div className="flex justify-center">
                                <div className="px-4 py-2 bg-white rounded-b-full">
                                    <h1 className="text-black text-center text-lg font-bold px-4">XXXI</h1>
                                </div>
                            </div>
                            <div className="bg-white grid grid-cols-3">
                                <div className="flex justify-center bg-white w-2/4">
                                    {liked ? (
                                        <Link
                                            href={route('unlike.likePost')}
                                            method='delete'
                                            data= {{post_id: feature.properties.post_id}}
                                            as='button'
                                            onClick={handleUnlike}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#055555" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                            </svg>
                                        </Link>
                                        // <button onClick={(event) => handleUnlike(event, feature.properties.post_id)}>
                                        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                        //          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                                        //          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                        //     </svg>
                                        // </button>
                                    ) : (
                                        <Link
                                            href={route('like.likePost')}
                                            method='post'
                                            data= {{post_id: feature.properties.post_id}}
                                            as='button'
                                            onClick={handleLike}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124 .06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                            </svg>
                                        </Link>
                                        // <button onClick={(event) => handleLike(event, feature.properties.post_id)}>
                                        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                        //         <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124 .06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                                        //         <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                        //     </svg>
                                        // </button>
                                    )}
                                </div>
                                <div className="flex w-full justify-center items-center">
                                    <p>{feature.properties.title}</p>
                                </div>
                                <div className="w-full py-auto flex justify-end">
                                    <PostDetail feedjson={feedjson} content={feature.properties.content} user={feature.user.user_id} postId={feature.properties.post_id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
