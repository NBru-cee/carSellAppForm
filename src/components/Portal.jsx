import React from "react";

const Portal = () => {
     const modal = document.querySelector(".modal");
     const show = () => {
          modal.showModal();
     };

     const closeModal = (e) => {
          const dialogDimensions = modal.getBoundingClientRect();
          if (
               e.clientX < dialogDimensions.left ||
               e.clientX > dialogDimensions.right ||
               e.clientY < dialogDimensions.top ||
               e.clientY > dialogDimensions.bottom
          ) {
               modal.close();
          }
     };
     return (
          <div>
               <button
                    onClick={show}
                    className="text-white bg-amber-500 p-2 rounded-md"
               >
                    Save
               </button>
               <dialog onClick={closeModal} className="modal">
                    <form>
                         <h4>Do you want to proceed?</h4>
                         <button className="bg-emerald-700 text-white px-4 py-1">
                              Continue
                         </button>
                         <button
                              formMethod="dialog"
                              className="bg-red-700 text-white px-4 py-1"
                         >
                              Cancel
                         </button>
                    </form>
               </dialog>
          </div>
     );
};

export default Portal;
