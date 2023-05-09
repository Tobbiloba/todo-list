// import { useState } from "react";

// //icons
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import MenuIcon from "@mui/icons-material/Menu";

// //styles
// import '../styles/Dropdown.css';

// const Note = ({ theme }) => {
//   const [selectedTag, setSelectedTag] = useState(0);

//   const tag = [
//     {
//       id: 0,
//       tag: 'All'
//     },
//     {
//       id: 1,
//       tag: 'Work'
//     },
//     {
//       id: 2,
//       tag: 'Personal'
//     },
//     {
//       id: 3,
//       tag: 'Fitness'
//     },
//     {
//       id: 4,
//       tag: 'Education'
//     }
//   ];

//   const selected = (id) => {
//     setSelectedTag(id);
//   };

//   return (
//     <div className="flex flex-col px-4 mt-4">
//       <div
//         className={`flex flex-row justify-between items-center ${theme ? "text-white" : "text-black"}`}
//       >
//         <h1 className="text-4xl font-mono font-bold">Your Notes</h1>
//         <div className="border px-3 outline-none rounded-xl pt-1">
//           <h1 className="text-2xl">+</h1>
//         </div>
//       </div>
//       <div className="flex flex-row mt-4 justify-between">
//         <div>
//           <select
//             className={`border-2 rounded-xl bg-gray-600 font-bold w-[135px] text-white h-[45px] px-1 ${theme ? 'border-cyan-500' : 'border-gray-500'}`}
//             id="note-select"
//             value={selectedTag}
//             onChange={(e) => setSelectedTag(parseInt(e.target.value))}
//           >
//             {tag.map((item) => (
//               <option key={item.id} value={item.id}>{item.tag}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <WidgetsIcon className={`${theme ? 'text-cyan-500' : 'text-gray-500'}`} />
//           <MenuIcon className={`${theme ? 'text-cyan-500' : 'text-gray-500'}`} />
//         </div>
//       </div>
//       <div className="flex overflow-y-hidden flew-row mt-6">
//         {tag.map((item) => (
//           <div
//             key={item.id}
//             className={`mr-4 border px-4 py-1 bg-black text-white rounded-[10px] ${selectedTag === item.id ? 'border-green-500' : 'border-slate-300'}`}
//             onClick={() => setSelectedTag(item.id)}
//           >
//             <h1>#{item.tag}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Note;


import { useState } from "react";

//icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";

//styles
import '../styles/Dropdown.css';

const Note = ({ theme }) => {
    const [selectedTag, setSelectedTag] = useState(0);

    const tag = [
        {
            id: 0,
            tag: 'All'
        },
        {
            id: 1,
            tag: 'Work'
        },
        {
            id: 2,
            tag: 'Personal'
        },
        {
            id: 3,
            tag: 'Fitness'
        },
        {
            id: 4,
            tag: 'Education'
        }
    ];

    const selected = (id) => {
        setSelectedTag(id);
    };

    return (
        <div className="flex flex-col px-4 mt-4">
            <div
                className={`flex flex-row justify-between items-center ${theme ? "text-white" : "text-black"}`}
            >
                <h1 className="text-4xl font-mono font-bold">Your Notes</h1>
                <div className="border px-3 outline-none rounded-xl pt-1">
                    <h1 className="text-2xl">+</h1>
                </div>
            </div>
            <div className="flex flex-row mt-4 justify-between">
                <div>
                    <select
                        className={`border-2 rounded-xl bg-gray-600 font-bold w-fit text-white h-[45px] px-1 ${theme ? 'border-cyan-500' : 'border-gray-500'}`}
                        id="note-select"
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(parseInt(e.target.value))}
                    >
                        {tag.map((item) => (
                            <option key={item.id} value={item.id}>{item.tag}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <WidgetsIcon className={`mr-3 ${theme ? 'text-cyan-500' : 'text-gray-500'}`} />
                    <MenuIcon className={`${theme ? 'text-gray-500' : ''}`} />
                </div>
            </div>
            <div className="flex overflow-y-hidden flew-row mt-6">
                {tag.map((item) => (
                    <div
                        key={item.id}
                        className={`mr-4 border px-4 py-1 bg-black text-white rounded-[10px] ${selectedTag === item.id ? 'border-none bg-green-400' : 'border-slate-300'}`}
                        onClick={() => setSelectedTag(item.id)}
                    >
                        <h1>#{item.tag}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Note;

