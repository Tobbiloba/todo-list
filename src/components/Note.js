import { useState, useEffect } from "react";

// navigate
import { useNavigate } from "react-router-dom";
// icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";

// styles
import "../styles/Dropdown.css";
import Notes from "./Notes";

const Note = ({ theme }) => {
    const [selectedTag, setSelectedTag] = useState("all");

    const selected = (id) => {
        setSelectedTag(id);
        console.log(id);
    };

    const navigate = useNavigate();

    function handleClick() {
        navigate("/write-note");
    }

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        function loadTask() {
            const data = localStorage.getItem("Notes");
            if (data !== null) {
                setNotes(JSON.parse(data));
            }
        }
        loadTask();
    }, []);

    const uniqueTags = ["all", ...new Set(notes.map((item) => item.tag))];

    return (
        <div className="flex flex-col px-4 mt-4">
            <div
                className={`flex flex-row justify-between items-center ${theme ? "text-white" : "text-black"
                    }`}
            >
                <h1 className="text-4xl font-mono font-bold">Your Notes</h1>
                <div
                    className="border px-3 outline-none rounded-xl pt-1"
                    onClick={handleClick}
                >
                    <h1 className="text-2xl">+</h1>
                </div>
            </div>
            <div className="flex flex-row mt-4 justify-between">
                <div>
                    <select
                        className={`border-2 rounded-xl bg-cyan-600 font-bold text-white h-[45px] w-[10px] px-1 ${theme ? "border-cyan-500" : "border-gray-500"
                            }`}
                        id="note-select"
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        style={{ width: "120px" }}
                    >
                        {uniqueTags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                {/* ... */}
            </div>
            <div className="flex overflow-y-hidden flew-row mt-6">
                {uniqueTags.map((tag, index) => {
                    const isSelected = selectedTag === tag;
                    return (
                        <div
                            key={index}
                            className={`mr-4 border px-4 py-1 bg-black text-white rounded-[10px] ${isSelected
                                ? "border-none bg-cyan-400"
                                : "border-slate-300"
                                }`}
                            onClick={() => setSelectedTag(tag)}
                        >
                            <h1>#{tag}</h1>
                        </div>
                    );
                })}
            </div>

            <Notes theme={theme} />
        </div>
    );
};

export default Note;
