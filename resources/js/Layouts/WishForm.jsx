import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import PrimaryButton from '@/Components/PrimaryButton';
import { router, useForm } from '@inertiajs/react';
import { Textarea } from 'flowbite-react';

export default function WishForm({landmark}) {
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
        router.get(route('wish.index'))
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div>
                    <PrimaryButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-paper" viewBox="0 0 16 16">
                            <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                        </svg>
                        <h3>เริ่มอธิษฐาน</h3>
                    </PrimaryButton>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="absolute z-20 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="absolute z-30 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        KU-MUTELU
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        คำมั่นสัญญาของคุณ {landmark.feature.properties.thainame}
                    </Dialog.Description>
                    <fieldset className="mb-[15px] items-center gap-5">
                        <input id="file" name="file" type="file" display='none' onChange={handleFileChange} accept="image/*"/>
                        {preview && <img src={preview} alt="Preview" style={{ height: '100px' }} />}
                    </fieldset>
                    <fieldset className="mb-[15px]  items-center gap-5">
                    <label className="w-[90px] text-right text-[15px]" htmlFor="wish">
                        คำอธิษฐาน หรือ คำมั่นสัญญา
                    </label>
                    <Textarea
                        className="mt-2 shadow-gray-300 focus:shadow-teal-600 inline-flex w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="wish"
                        placeholder='เขียนคำอธิษฐาน หรือ คำมั่นสัญญาของคุณ'
                        required rows={6}
                    />
                    </fieldset>
                    <div className="mt-[25px] flex justify-center">
                        <Dialog.Close asChild>
                            <PrimaryButton onClick={handleSubmit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                </svg>
                                <span>เขียน</span>
                            </PrimaryButton>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                    <button
                        className="hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
