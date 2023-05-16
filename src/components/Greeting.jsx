import React, { useState } from "react";

const Greeting = () => {
     const [greeting, setGreeting] = useState("");
     const [isShow, setIsShow] = useState(false);
     const handleChange = (e) => {
          setGreeting(e.target.value);
     };

     const handleClick = () => {
          setIsShow(true);
     };

     return (
          <>
               <section>
                    <label htmlFor="greeting">Enter your greeting:</label>
                    <input
                         type="text"
                         name="greeting"
                         id="greeting"
                         value={greeting}
                         onChange={handleChange}
                         className="text-black outline-none p-1 rounded-sm"
                    />
                    <button
                         type="submit"
                         onClick={handleClick}
                         className="bg-blue-900 text-white rounded-sm px-2 py-1"
                    >
                         Greet
                    </button>
                    <h3
                         className={`${
                              isShow
                                   ? "text-emerald-800 bg-white rounded-t-lg p-2"
                                   : ""
                         }`}
                    >
                         {greeting}
                    </h3>
               </section>
          </>
     );
};

export default Greeting;
