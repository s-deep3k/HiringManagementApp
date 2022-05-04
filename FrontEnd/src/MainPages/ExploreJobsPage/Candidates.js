import React, { useState } from "react";
import { CandidateModal } from "../../components/Modal/Modal";
function Candidates(props) {
  const [show, setModal] = useState(false);
  const [selectedCandidate, setCandidate] = useState(null);
  const openModal = (id) => {
    setCandidate({ ...props });
    //console.log(selectedCandidate);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {show && <CandidateModal user={selectedCandidate} onClose={closeModal} />}
      <li className="border-gray-400 bg-gray-50 flex flex-row mb-2 w-[48%]">
        <div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-blue-100">
          <div className="flex-1 pl-1 mr-16">
            <div className="font-bold text-2xl text-stone-800">
              {props.name}
            </div>
          </div>
          <div
            onClick={openModal}
            className=" text-wrap text-center flex bg-blue-50 rounded-md cursor-pointer hover:bg-blue-100 text-blue-700 text-bold flex-col justify-center items-center mr-10 p-2"
          >
            View Details!
          </div>
        </div>
      </li>
    </>
  );
}

export default Candidates;
