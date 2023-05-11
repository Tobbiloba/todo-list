import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';


//useref
import { useRef, useEffect } from 'react';

//navigate
import { useNavigate } from "react-router-dom";
const WriteNote = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/write-note')
    }

    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);
    return (
        <div className="bg-black flex flex-col h-[100vh] pt-8">
            <div className='flex flex-row px-2 h-[45px] w-full justify-between  fixed'>
                <CloseIcon className='stroke-slate-300' style={{ fontSize: '32px' }} />
                <CheckIcon className='stroke-slate-300' style={{ fontSize: '32px' }} />
            </div>
            <div className=' px-2 mt-20'>
                <div>
                    <input className="w-full bg-inherit h-[40px] font-normal font-mono text-xl" placeholder='Title' />
                </div>
                <div>
                    <h1 className='text-slate-600 text-[14px]'>Thursday, May 11, 15:46 <span className='text-white'>|</span> <span>0 characters</span></h1>
                </div>
                <div className=' mt-4'>
                    <textarea ref={textareaRef} className='w-full outline-none text-white border-none text-xl bg-inherit h-[70vh]'></textarea>
                </div>
            </div>


        </div>
    )
}
export default WriteNote;