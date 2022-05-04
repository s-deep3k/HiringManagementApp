import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FillUpModal } from "./FillUp";
import { InterviewerModal } from "./InterviewerModal";

export const CandidateModal = (props) => {
  const [modalState, setState] = useState({ ...props.user });
  const {
    id,
    name,
    email,
    dob,
    gender,
    yoe,
    status,
    feedback,
    mobile,
    cskills,
    nperiod,
    expctc,
    btech,
    relocate,
    interviewer,
  } = modalState;
  const fetch = useCallback(() => {
    axios
      .get("http://localhost:8080/Project/showCandidateById/" + id)
      .then((res) => {
        setState({ ...res.data });
      });
  }, [id]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  const [show, toggleModal] = useState(false);
  const [fill, toggleFillModal] = useState(false);
  const closeModal = () => {
    fetch();
    toggleModal(false);
  };
  const openModal = () => {
    toggleModal(true);
  };
  const closeFill = () => {
    fetch();
    toggleFillModal(false);
  };
  const openFill = () => {
    toggleFillModal(true);
  };
  return (
    <div>
      {show && (
        <InterviewerModal
          cId={id}
          interviewer={interviewer}
          onClose={closeModal}
        />
      )}
      {fill && <FillUpModal user={modalState} onClose={closeFill} />}
      <div className="flex justify-center items-center">
        <div
          className="bg-black bg-opacity-[85%] fixed z-20 inset-0"
          onClick={() => props.onClose()}
        ></div>
        <div className="bg-gray-50 top-24 w-1/3 z-30 absolute shadow-2xl shadow-gray-900 justify-center rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="container">
              <div className="h-32 overflow-hidden">
                <img
                  className="w-full rounded-t-2xl"
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt=""
                />
              </div>
              <div className="flex justify-center px-5 -mt-12">
                <img
                  className="h-32 w-32 bg-white p-2 rounded-full"
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt=""
                />
              </div>
              <div className=" ">
                <div className="text-center px-14">
                  <h2 className="text-gray-800 text-3xl font-bold">{name}</h2>
                  <p className="text-gray-500 mt-2">{email}</p>
                  <p className="mt-2 text-gray-600 text-center">
                    <strong>Date of Birth : </strong>
                    {new Date(dob).toLocaleDateString()}
                    <br />
                    <strong>Gender : </strong>
                    {gender}
                    <br />
                    <strong>Contact No : </strong>
                    {mobile}
                    <br />
                    <strong>BTECH CGPA : </strong>
                    {btech === null || btech === "" ? (
                      <span className="text-red-500">Yet to be Filled</span>
                    ) : (
                      btech
                    )}
                    <br />
                    <strong>Years of Experience : </strong>
                    {yoe}
                    <br />
                    <strong>Skills : </strong>
                    {cskills.split(",").map((skill, index) => {
                      if (index !== cskills.split(",").length - 1)
                        return <span key={skill}> {skill} ,</span>;
                      else return <span key={skill}> {skill} .</span>;
                    })}
                    <br />
                    <strong>Serving Notice Period : </strong>
                    {nperiod === null || nperiod === "" ? (
                      <span className="text-red-500">Yet to be Filled</span>
                    ) : (
                      nperiod
                    )}
                    <br />
                    <strong>Expected CTC : </strong>
                    {expctc === null || expctc === "" ? (
                      <span className="text-red-500">Yet to be Filled</span>
                    ) : (
                      expctc
                    )}
                    <br />
                    <strong>Willing to Relocate : </strong>
                    {relocate === null || relocate === "" ? (
                      <span className="text-red-500">Yet to be Filled</span>
                    ) : (
                      relocate
                    )}
                    <br />
                    {interviewer !== null && (
                      <>
                        <strong>Assigned Interviewer : </strong>
                        {interviewer.name}
                        <br />
                        <strong>Available From : </strong>
                        {interviewer.avfrom}
                        <br />
                        <strong>To : </strong>
                        {interviewer.avto}
                      </>
                    )}
                    <br />
                    {status !== null && status !== "" && (
                      <>
                        <strong>Status : </strong>
                        {status === "REJECTED" ? (
                          <span className="text-red-600 font-bold">
                            {status}
                          </span>
                        ) : status === "ACCEPTED" ? (
                          <span className="text-green-600 font-bold">
                            {status}
                          </span>
                        ) : (
                          <span className="text-yellow-600 font-bold">
                            {status}
                          </span>
                        )}
                      </>
                    )}
                    <br />
                    {feedback !== null && (
                      <>
                        <strong className="">Feedback : </strong>
                        <input
                          className="flex justify-center items-center w-full"
                          readOnly
                          value={feedback}
                        />
                      </>
                    )}
                  </p>
                </div>
                {(btech === null ||
                  expctc === null ||
                  relocate === null ||
                  nperiod === null) && (
                  <p className="text-red-500 text-center px-4">
                    Please Fill Up the <strong>Necessary Details</strong> By
                    clicking on <strong>Update Candidate</strong>, before
                    assigning an interviewer!
                  </p>
                )}
                <hr className="mt-6" />
                <div className="flex  bg-gray-100 rounded-b-2xl">
                  <button
                    disabled={
                      btech === null ||
                      expctc === null ||
                      relocate === null ||
                      nperiod === null
                    }
                    onClick={openModal}
                    className="text-center disabled:text-slate-400 disabled:cursor-not-allowed hover:text-green-600 w-1/2 p-4 cursor-pointer transition duration-300"
                  >
                    Assign Interview
                  </button>
                  <div className="border"></div>
                  <div
                    onClick={openFill}
                    className="text-center hover:text-blue-500 w-1/2 p-4 cursor-pointer transition duration-300"
                  >
                    Update Candidate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
