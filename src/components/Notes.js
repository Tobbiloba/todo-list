import { useState, useRef, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Tilt from 'react-vanilla-tilt';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Notes = ({ theme }) => {
    const [loading, setLoading] = useState(false);
    const [notes, setNotes] = useState([]);
    const [about, setAbout] = useState(false);
    const [details, setDetails] = useState({});
    const [id, setId] = useState('');
    const [showSettings, setShowSettings] = useState(false);


    const showAbout = (id) => {
        const selectedNote = notes.find((item) => item.id === id);
        if (selectedNote) {
            setDetails(selectedNote);
        }
        setAbout(true);
    };

    const closeDetails = () => {
        setAbout(false);
    };

    const deleteNote = (objectId) => {
        // Retrieve the existing object from localStorage
        const existingObject = JSON.parse(localStorage.getItem('Notes')) || [];

        // Find the index of the array to be deleted
        const index = existingObject.findIndex((item) => item.id === objectId);

        if (index !== -1) {
            // Remove the array from the existing object
            existingObject.splice(index, 1);

            // Update the object in localStorage
            localStorage.setItem('Notes', JSON.stringify(existingObject));
        }
        window.location.reload();
    };

    const settings = (prop) => {
        setShowSettings(true);
        setId(prop);
        // console.log(id);
    };

    useEffect(() => {
        function loadTask() {
            const data = localStorage.getItem('Notes');
            if (data !== null) {
                setNotes(JSON.parse(data));
            }
        }
        loadTask();

        setLoading(false);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/edit");
    }

    return (
        <div className="flex flex-wrap mt-12  h-[520px] overflow-y-scroll">
            {notes.length === 0 ? (
                <div className='flex items-center border w-[90vw] justify-center text-center'>
                    <h1 className='w-fit text-white'>You do not have any note yet!</h1>
                </div>
            ) : (
                notes.map((item) => (
                    <div key={item.id} className="w-[155px] mx-2 my-2 rounded-xl h-[220px] pb-3 overflow-hidden flex items-center justify-center">
                        <Tilt>
                            <div className="w-[145px] h-[200px] flex flex-col justify-between">
                                <div>
                                    <h1 className="font-bold">{item.title}</h1>
                                    <p className="font-light text-[14px]">{item.date}</p>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <h1 className="font-light text-[16px] h-[100px] overflow-y-hidden">{item.body}</h1>
                                    <div className="flex flex-row justify-between mt-2">
                                        <ContactSupportIcon onClick={() => showAbout(item.id)} />
                                        <SettingsIcon onClick={() => settings(item.id)} />
                                    </div>
                                </div>
                                {showSettings && id === item.id && (
                                    <div className='relative bottom-28'>
                                        <div className='flex justify-end items-end'>
                                            <CloseIcon onClick={() => setShowSettings(false)} />
                                        </div>
                                        <div className="bg-slate-200 z-10 border flex flex-col  py-4 rounded-xl">

                                            <div className='border border-white flex item-center justify-center'>
                                                <Link to={`/edit/${item.id}`}>
                                                    <button>Edit</button>
                                                </Link>
                                            </div>

                                            <button className="text-red-500 mt-1" onClick={() => deleteNote(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tilt>
                    </div>
                ))
            )}
            {about &&
                (<div className='absolute w-[80vw] left-0 ml-[10vw] bottom-12 rounded-xl px-3 border border-slate-500 py-4 flex-col  flex bg-white'>
                    <div className='flex flex-row justify-between items-center mb-4'>
                        <h1 className='font-bold text-xl text-slate-600'>Details</h1>
                        <CloseIcon onClick={closeDetails} />
                    </div>

                    <div className=''>
                        <h1 className="text-[16px] font-bold mt-2">Title: <span className='text-slate-600 ml-3 font-normal'>{details?.title}</span></h1>
                        <h1 className="text-[16px] font-bold mt-2">Tag: <span className='text-slate-600 ml-3 font-normal'>{details?.tag}</span></h1>
                        <h1 className="text-[16px] font-bold mt-2">Characters: <span className='text-slate-600 ml-3 font-normal'>{details?.char}</span></h1>
                        <h1 className="text-[16px] font-bold mt-2">Date: <span className='text-slate-600 ml-3 font-normal'>{details?.date}</span></h1>
                    </div>

                </div>)
            }
            {loading && (
                <div className={`absolute flex items-center justify-center w-[100vw] h-[520px] ${theme === true ? 'bg-black' : 'bg-white'}`}>
                    <CircularProgress />
                </div>
            )}

        </div>
    );
};

export default Notes;
