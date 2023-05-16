import React, { useState } from "react";

const Count = () => {
      const [count, setCount] = useState(0);
      return (
            <>
                  <div>
                        <span className="text-2xl text-emerald-500 bg-white flex items-center justify-center p-1 rounded-md ">
                              {count}
                        </span>
                        <div>
                              <button
                                    onClick={() => setCount(count + 1)}
                                    className="border-none outline-none text-base px-4 py-2 bg-emerald-700 text-white flex items-center justify-center"
                              >
                                    +
                              </button>
                              <button
                                    onClick={() => setCount(count - 1)}
                                    className="border-none outline-none text-base px-4 py-2 bg-emerald-700 text-white flex items-center justify-center"
                              >
                                    -
                              </button>
                        </div>
                  </div>
            </>
      );
};

export default Count;
