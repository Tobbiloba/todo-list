import { useState } from "react";

//dropdown
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";

//styles
import '../styles/Dropdown.css'
const Note = ({ theme }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="flex flex-col px-4 mt-6">
            <div
                className={`flex flex-row justify-between items-center ${theme === true ? "text-white" : "text-black"
                    }`}
            >
                <h1 className="text-[40px] font-mono font-bold">Your Notes</h1>
                <div className="border px-3 outline-none rounded-xl pt-1">
                    <h1 className="text-2xl">+</h1>
                </div>
            </div>
            <div className="flex flex-row mt-4 justify-between">
                <div>
                    {/* <FormControl fullWidth>
                        <InputLabel htmlFor="note-select">Note</InputLabel>
                        <Select
                            id="note-select"
                            value={selectedValue}
                            onChange={handleChange}
                            label="Note"
                            style={{

                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl> */}

                    <select className={`border-2 rounded-xl bg-gray-600 font-bold w-[135px] text-white h-[45px] px-1 ${theme === true ? ' border-slate-400' : 'border-slate-800'}`}>

                        <option value="fruit" className="">Fruit</option>

                        <option value="vegetable">Vegetable</option>

                        <option value="meat">Meat</option>

                    </select>
                </div>
                <div>
                    <WidgetsIcon className="stroke-cyan-500 mr-3" />
                    <MenuIcon className="stroke-gray-500" />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Note;
