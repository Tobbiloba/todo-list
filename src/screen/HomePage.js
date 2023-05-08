import { useState } from 'react';
import MenuBar from '../components/MenuBar';

const HomePage = () => {
    const [theme, setTheme] = useState('true');
    const backgroundColor = theme == 'true' ? 'bg-black' : 'bg-white';
    console.log(theme)
    const handleTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <div
            // className={`${theme == 'true' ? 'bg-black' : 'bg-white'} bg-black h-[100vh] border border-black`}
            className="bg-black h-[100vh]"
        >
            <MenuBar onTheme={handleTheme} />
        </div>
    );
};

export default HomePage;
