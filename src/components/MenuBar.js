import { useEffect, useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const MenuBar = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        props.onTheme(darkMode);
    }, [darkMode, props]);

    const toggleTheme = () => {

        setDarkMode(!darkMode);
    };

    return (
        <div className="flex flex-row justify-between px-4 py-4">
            <div className="flex flex-row items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshW2NpetcJKgpq6jaRpnFR2uxuGAXWEN8KQ&usqp=CAU"
                    className="w-[36px] h-[36px] rounded-full"
                />
                <h1 className='text-white ml-4 font-bold text-[14px]'>
                    Welcome back <span className='font-bold text-slate-400'>Tobiloba</span>
                </h1>
            </div>
            <div className="flex flex-row items-center">
                <NotificationsNoneIcon style={{ color: '6B7280' }} />
                <div className='ml-4'>
                    {darkMode ? (
                        <WbSunnyIcon
                            className="bg-inherit flex cursor-pointer"
                            onClick={toggleTheme}
                            style={{ color: 'white' }}
                        />
                    ) : (
                        <NightlightRoundIcon
                            className="bg-inherit flex cursor-pointer"
                            onClick={toggleTheme}
                            style={{ color: 'white' }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
