import React, { useState } from "react";

const Color = () => {
     const [color, setColor] = useState("");

     return (
          <div>
               <article>
                    <input
                         type="text"
                         value={color}
                         onChange={(e) => setColor(e.target.value)}
                         placeholder="Enter color"
                         autoFocus
                    />
                    {/* <button onClick={changeBackground}>Set Color</button> */}
               </article>
               <article>
                    <div
                         className="w-20 h-20 bg-white"
                         style={{ background: `${color}` }}
                    ></div>
               </article>
          </div>
     );
};

export default Color;
