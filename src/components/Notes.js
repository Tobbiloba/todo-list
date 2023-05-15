import { useState, useRef, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Tilt from 'react-vanilla-tilt';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';

const Notes = ({ theme }) => {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);
    const [about, setAbout] = useState(false);
    const [details, setDetails] = useState([]);

    const showAbout = (id) => {
        const mapped = notes.map((item) => {
            if (item.id === id) {
                setDetails(item)
            }

        })
        setAbout(true)
    };
    const closeDetails = () => {
        setAbout(false)
    }
    useEffect(() => {
        function loadTask() {
            const data = localStorage.getItem('Notes');
            if (data !== null) {
                setNotes(JSON.parse(data));
            }
        }
        loadTask();

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="flex flex-wrap mt-12 pb-3 h-[520px] overflow-y-scroll">
            {notes.map((item) => (
                <div key={item.id} className="w-[155px] mx-2 my-2 rounded-xl h-[220px] overflow-hidden flex items-center justify-center">
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
                                    <SettingsIcon />
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            ))}
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
