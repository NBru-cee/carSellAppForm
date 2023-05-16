import React, { useState } from "react";

const Form = () => {
     const [inputValue, setInputValue] = useState("");
     const [greetArray, setGreetArray] = useState([]);
     const [range, setRange] = useState(0);
     const handleChange = (e) => {
          setInputValue(e.target.value);
     };
     const handleSubmit = (e) => {
          e.preventDefault();
          greetArray.push(inputValue);
          setGreetArray(greetArray);
          setInputValue("");
     };
     return (
          <section>
               <form onSubmit={handleSubmit}>
                    <fieldset>
                         <legend> Enter Todo</legend>
                         <input
                              type="text"
                              value={inputValue}
                              onChange={handleChange}
                              className="border-none outline-none p-2 rounded-sm text-black text-base"
                         />
                         <input
                              type="image"
                              src="https://picsum.photos/100/50"
                              alt="lorem photo"
                              title="Submit"
                              className="rounded-md block hover:opacity-50 duration-100 transition-all"
                         />
                    </fieldset>
               </form>
               <article>
                    <h5>Todos:</h5>
                    <ol>
                         {greetArray.map((greeting, index) => (
                              <li key={index} className="text-emerald-500">
                                   {greeting}
                              </li>
                         ))}
                    </ol>
               </article>
          </section>
     );
};

export default Form;
