import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import PrimaryButton from '@/Components/PrimaryButton';
import RadioGroupOffering from '@/Components/RadioGroupOffering';

export default function  ({landmark}) {
    const [quantity, setQuantity] = useState(1);
    const [preview, setPreview] = useState(null);

    const unincrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity - 1); // เพิ่มค่า quantity ขึ้น 1 ทุกครั้งที่ฟังก์ชันนี้ถูกเรียก
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1); // เพิ่มค่า quantity ขึ้น 1 ทุกครั้งที่ฟังก์ชันนี้ถูกเรียก
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div>
                    <PrimaryButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-paper" viewBox="0 0 16 16">
                            <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                        </svg>
                        <h3>เลือกของถวาย</h3>
                    </PrimaryButton>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="absolute z-20 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="absolute z-30 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-5/6 translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-center text-mauve12 m-0 text-[17px] font-medium">
                        KU-MUTELU
                    </Dialog.Title>
                    <Dialog.Description className="flex justify-center text-center mt-[10px] mb-5 text-[15px] leading-normal">
                        <span className='text-white rounded-full px-4 py-2 bg-[#005555] '>
                            เลือกของถวาย
                        </span>
                    </Dialog.Description>
                    <fieldset className="mb-[15px]  items-center gap-5">
                        <RadioGroupOffering/>
                    </fieldset>
                    <fieldset className='flex justify-center space-x-4'>
                    <PrimaryButton onClick={unincrementQuantity}>
                            <span className='text-2xl'>-</span>
                        </PrimaryButton>
                        <div className='flex justify-center items-center bg-white w-[50px] h-[50px] border-2 rounded-full border-[#005555]'>
                            <p className='text-4xl font-extrabold text-[#005555]'>{quantity}</p>
                        </div>
                        <PrimaryButton onClick={incrementQuantity}>
                            <span className='text-2xl'>+</span>
                        </PrimaryButton>
                    </fieldset>
                    <div className="mt-[25px] flex justify-center space-x-4">
                        <Dialog.Close asChild>
                            <PrimaryButton>
                            <   svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-paper" viewBox="0 0 16 16">
                                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                                </svg>
                                <span>ยืนยัน</span>
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
