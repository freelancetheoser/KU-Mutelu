import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestButton from '@/Components/GuestButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import axios from 'axios';

export default function Post({ auth }) {
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
      content: '',
      image: '',
    });


    const handleFileChange = (e) => {
      const files = e.target.files;
      if (files.length > 0) {
          setData('image', e.target.files[0])
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

        post(route('post.store'));

        console.log('Submitting content and file:' ,data);
    };
    return (
            <div>
                <Head title="Post test" />
                <NavBar auth={auth}/>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className='flex mt-40 space-x-4'>
                        <div className='my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </div>
                        <div className="w-full">
                            <InputLabel />

                            <TextInput
                                id="content"
                                type="text"
                                name="content"
                                value={data.content}
                                placeholder="Post"
                                className="mt-1 block w-full"
                                autoComplete="content"
                                isFocused={true}
                                onChange={(e) => setData('content', e.target.value)}
                            />

                            <InputError message={errors.content} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <input id="file" name="file" type="file" onChange={handleFileChange} accept="image/*" />
                        {preview && <img src={preview} alt="Preview" style={{ height: '100px' }} />}
                    </div>


                    <div className='flex justify-center'>
                        <GuestButton className="text-[#005555] ml-4 bg-[#A1E3D8] space-x-2 " disabled={processing}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <span>เขียน</span>
                        </GuestButton>
                    </div>
                </form>
            </div>
    );
}
