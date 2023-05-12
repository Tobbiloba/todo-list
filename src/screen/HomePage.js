import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import Note from '../components/Note';


const HomePage = () => {
    const [theme, setTheme] = useState('');
    const handleTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <div
            className={`${theme === true ? 'bg-black' : 'bg-white'} bg-black h-[100vh] border border-black`}>
            <MenuBar onTheme={handleTheme} />
            <Note theme={theme} />
        </div>
    );
};

export default HomePage;
