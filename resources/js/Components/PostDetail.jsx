import React from 'react';

function PostDetail({ content, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white h-32 p-4 rounded-lg shadow-lg">
                {/* <p>{content}</p> */}
                {/* <img src={content} alt="" className='h-4 w-4'/> */}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Close</button>
            </div>
        </div>
    );
}

export default PostDetail;
