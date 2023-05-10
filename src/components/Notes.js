import { useState, useRef, useEffect } from 'react';

//dummy notes
import notes from '../data/notes'

//vanilla tilt
import Tilt from 'react-vanilla-tilt'


//icons
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const Notes = () => {

    return (
        <div className='flex flex-wrap mt-12 items-center justify-center'>
            {
                notes.map((item) => {
                    return (
                        <div key={item.id} className="w-[160px] mx-2 my-3 rounded-xl h-[220px] overflow-hidden flex items-center justify-center">
                            <Tilt >
                                <div className='w-[150px] h-[200px] flex flex-col justify-between'>
                                    <div>
                                        <h1 className='font-bold'>{item.title}</h1>
                                        <p className='font-light text-[14px]'>{item.date}</p>
                                    </div>
                                    <div className='flex flex-col mt-3'>
                                        <h1 className='font-light text-[16px]'>{item.note}</h1>
                                        <div className='flex flex-row justify-between mt-2'>
                                            <ContactSupportIcon />
                                            <SettingsIcon />
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>


                    )
                })
            }
        </div>
    )
}
export default Notes;