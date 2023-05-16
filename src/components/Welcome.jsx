import React from "react";

const Welcome = () => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      const text = {
            morning: "Good Morning",
            afternoon: "Good Afternoon",
            event: "Good Evening",
      };
      return (
            <div>
                  <h3>{text.morning}</h3>
                  <p>
                        <span>{hours}</span> - <span>{minutes}</span> -
                        <span>{seconds}</span>
                  </p>
            </div>
      );
};

export default Welcome;
