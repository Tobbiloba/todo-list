import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';


//useref
import { useRef, useEffect, useState } from 'react';

//navigate
import { useNavigate } from "react-router-dom";
const WriteNote = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [count, setCount] = useState(0);



    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    const input = useRef(null);

    useEffect(() => {
        if (input.current) {
            input.current.focus();
        }
    }, []);

    useEffect(() => {
        const titleLength = title.length;
        const bodyLength = body.length;
        const totalCount = titleLength + bodyLength;

        setCount(totalCount >= 0 ? totalCount : 0);
        console.log(count)
    }, [title, body]);



    const [datePrefix, setDatePrefix] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        const [weekday, month, day, year] = formattedDate.split(' ');
        const monthString = month.charAt(0).toUpperCase() + month.slice(1);
        const datePrefix = `${weekday} ${monthString} ${day}, ${year}`;
        setDatePrefix(datePrefix);
    }, []);

    console.log(datePrefix);


    return (
        <div className="bg-black flex flex-col h-[100vh] pt-8">
            <div className='flex flex-row px-2 h-[45px] w-full justify-between  fixed'>
                <CloseIcon className='stroke-slate-300' style={{ fontSize: '32px' }} />
                <CheckIcon className='stroke-slate-300' style={{ fontSize: '32px' }} />
            </div>
            <div className=' px-2 mt-20'>
                <div>
                    <input ref={input} className="w-full bg-inherit outline-none border-none h-[40px] font-normal text-white font-mono text-xl" placeholder='Title' value={title} onInput={handleTitleChange} />
                </div>
                <div>
                    <h1 className='text-slate-600 text-[14px]'>{datePrefix} <span className='text-white'>|</span> <span>{count} characters</span></h1>
                </div>
                <div className=' mt-4'>
                    <textarea className='w-full outline-none text-white border-none text-xl bg-inherit h-[70vh]' value={body} onInput={handleBodyChange}></textarea>
                </div>
            </div>


        </div>
    )
}
export default WriteNote;