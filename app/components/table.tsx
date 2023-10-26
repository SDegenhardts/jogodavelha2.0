'use client'

import { useState } from "react"

export default function Table() {



        const [mark,setMark] = useState('X');
        const [tomark,setToMark] = useState(["","","","","","","","","",]);

    return (
        <section className="flex justify-center items-center m-12">
            <table className="w-[4em] h-[4em] text-[8em] cursor-pointer ">
                <tr>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                </tr>
                <tr>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                </tr>
                <tr>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                    <td className="hover:bg-gray-800 bg-black border border-solid border-white text-white w-[1em] h-[1em] text-center" onClick={() => setMark("X"?"O":"X")}>{mark}</td>
                </tr>
            </table>
        </section>
    )
}