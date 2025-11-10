'use client';

import { useRouter } from "next/navigation";

interface props{
    link: string,
    label: string,
}

function MainButton(props: props){
    const router = useRouter();
    return(
        <>
            <button className="border-2 border-solid border-white rounded-sm bg-[#215C5B] font-bold text-lg text-white w-2xs h-14 cursor-pointer hover:bg-[#F8bc78] m-2" onClick={() => router.push(props.link)}>
                {props.label}
            </button>
        </>
    )
}

export default MainButton;