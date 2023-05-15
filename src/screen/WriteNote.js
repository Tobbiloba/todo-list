import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import { v4 as uuidV4 } from 'uuid'

// import StoreNoteComponent from '../components/StoreNote' // Renamed the import

//useref
import { useRef, useEffect, useState } from 'react';

//navigate
import { useNavigate } from "react-router-dom";
const WriteNote = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [count, setCount] = useState(0);
    const [id, setId] = useState('')
    const [saveCurrentNote, setSaveCurrentNote] = useState(false)


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
        setId(uuidV4())
        if (input.current) {
            input.current.focus();
        }
    }, []);

    useEffect(() => {
        const titleLength = title.length;
        const bodyLength = body.length;
        const totalCount = titleLength + bodyLength;

        setCount(totalCount >= 0 ? totalCount : 0);
        // console.log(count)
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

    // console.log(datePrefix);
    const [showDiscard, setShowDiscard] = useState(false)

    const showWarning = () => {
        setShowDiscard(true)
    }

    const closeDiscard = () => {
        setShowDiscard(false)
    }

    const previousPage = () => {
        if (title === '' && body === '') {
            handleClick()
        } else {
            showWarning()
        }
    }

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [sev, setSev] = useState('');
    const [showTag, setShowTag] = useState(false)

    const [tag, setTag] = useState('#general');


    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    const newNote = {
        id: uuidV4(),
        date: datePrefix,
        char: count,
        title: title,
        body: body,
        tag: tag.substring(1)
    };

    // ...

    const saveNote = () => {
        if (title === '' && body === '') {
            setSev('error');
            setMessage("Can't save empty fields");
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000); // Set timeout for 5 seconds (5000 milliseconds)
        } else if (title === '') {
            setSev('error');
            setMessage('Title is empty');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000); // Set timeout for 5 seconds (5000 milliseconds)
        } else if (body === '') {
            setSev('error');
            setMessage('Body is empty');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000); // Set timeout for 5 seconds (5000 milliseconds)
        } else {
            setShowTag(true);
        }
    };

    const save = () => {
        setShowTag(false);
        setSev('success');
        setMessage('Successfully saved this note');
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            const updatedNote = {
                ...newNote,
                id: uuidV4() // Generate a new id for each save
            };
            storeNote(updatedNote);
        }, 5000);
    };

    const storeNote = (note) => {
        // Retrieve existing notes from the local storage
        const existingNotes = JSON.parse(localStorage.getItem('Notes')) || [];
        // Add the new note to the existing notes
        const updatedNotes = [...existingNotes, note];
        // Store the updated notes in the local storage
        localStorage.setItem('Notes', JSON.stringify(updatedNotes));
        handleClick()
    };



    return (
        <div className="bg-black flex flex-col h-[100vh] pt-8">
            <div className='flex flex-row px-2 h-[45px] w-full justify-between  fixed'>
                <CloseIcon className='stroke-slate-300' style={{ fontSize: '32px' }} onClick={previousPage} />
                <CheckIcon className='stroke-slate-300' style={{ fontSize: '32px' }} onClick={saveNote} />
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
            {
                showDiscard && <div className='absolute flex flex-col h-[100vh] top-0 w-[100vw] px-4 backdrop-blur-sm bg-white/30 rounded-2xl text-white py-12 justify-between'>
                    <div className='flex justify-end items-end'>
                        <CloseIcon className='stroke-slate-300' style={{ fontSize: '32px' }} onClick={closeDiscard} />
                    </div>
                    <div className='flex text-center items-center justify-center'>
                        <h1 className='text-slate-500 text-2xl font-mono'>You have an unsaved note</h1>
                    </div>


                    <div className='justify-between flex'>
                        <button className='w-32 py-4 rounded-xl bg-white text-black text-xl font-mono font-bold' onClick={handleClick}>Discard</button>
                        <button className='w-32 py-4 rounded-xl bg-white text-black text-xl font-mono font-bold' onClick={saveNote}>Save</button>
                    </div>
                </div>
            }

            {
                showMessage && (
                    <div className='absolute z-10'>
                        <Alert severity={`${sev}`}>{message}</Alert>
                        {/* <h1 className='text-white'>Nice</h1> */}
                    </div>
                )
            }

            {
                showTag && <div className='absolute top-0 h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
                    <div className='w-[80vw] bg-slate-600 rounded-xl py-12 flex flex-col items-center justify-center'>
                        <input className=" bg-inherit outline-none border border-b-white border-slate-600 w-[70vw] mb-6 h-[40px] font-normal text-white font-mono text-xl" placeholder='tag' value={tag} onInput={handleTagChange} />
                        <button onClick={save} className='w-fit px-7 rounded-xl py-3 border text-white hover:bg-white hover:text-slate-600'>Save</button>
                    </div>

                </div>
            }



        </div>
    )
}
export default WriteNote;