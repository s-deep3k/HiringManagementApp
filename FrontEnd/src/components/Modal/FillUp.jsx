import axios from "axios";
import React, { useState } from "react";

export const FillUpModal = (props) => {
  const { name, interviewer } = props.user;
  const [candidate, setCandidate] = useState({ ...props.user });
  const { btech, expctc, nperiod, relocate, status } = candidate;
  const onChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(candidate);
    axios
      .put(
        "http://localhost:8080/Project/updateCandidateDetails/" + candidate.id,
        { ...candidate }
      )
      .then((res) => {
        alert("Details Updated! Now You can Assign an Interviewer!");
        props.onClose();
      })
      .catch((err) => alert("Some Unknown Error ocurred! " + err));
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="bg-black bg-opacity-[85%] fixed z-40 inset-0"
          onClick={() => props.onClose()}
        ></div>
        <div className="bg-gray-50 top-28 w-1/3 z-50 absolute shadow-2xl shadow-gray-900 justify-center rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="container">
              <div className=" px-4 py-6">
                <h2 className="text-gray-800 text-2xl text-center font-bold pb-3">
                  Please Fill Up The Details {name.split(" ")[0]}!
                </h2>
                <hr />
                <div className="text-center mt-4">
                  <form onSubmit={onSubmit}>
                    <div className="p-2">
                      <label htmlFor="btech">Enter Your BTECH CGPA</label>
                      <input
                        type="text"
                        id="btech"
                        name="btech"
                        value={btech !== null ? btech : ""}
                        placeholder="Example: 8.45"
                        className="rounded-lg ml-2 px-2"
                        onChange={onChange}
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="nperiod">Serving Notice Period?</label>
                      <input
                        type="text"
                        id="nperiod"
                        value={nperiod !== null ? nperiod : ""}
                        onChange={onChange}
                        name="nperiod"
                        placeholder="Yes/No"
                        className="rounded-lg ml-2 px-2"
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="expctc">Expected CTC?</label>
                      <input
                        type="text"
                        id="expctc"
                        value={expctc !== null ? expctc : ""}
                        onChange={onChange}
                        name="expctc"
                        placeholder="Example: 8 LPA"
                        className="rounded-lg ml-2 px-2"
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="relocate">Willing to Relocate?</label>
                      <input
                        type="text"
                        id="relocate"
                        value={relocate !== null ? relocate : ""}
                        onChange={onChange}
                        name="relocate"
                        placeholder="Yes/No"
                        className="rounded-lg ml-2 px-2"
                      />
                    </div>
                    {interviewer !== null && (
                      <>
                        <div className="p-2">
                          <label htmlFor="status">Specify the Status</label>
                          <input
                            type="text"
                            id="status"
                            name="status"
                            value={status !== null ? status : ""}
                            onChange={onChange}
                            placeholder="PENDING/ACCEPTED/REJECTED"
                            className="rounded-lg ml-2 px-2 w-[250px]"
                          />
                        </div>
                        <div className="p-2">
                          <label htmlFor="feedback">
                            Please Give Some Feedback
                          </label>
                          <input
                            type="text"
                            name="feedback"
                            id="feedback"
                            onChange={onChange}
                            placeholder="Your Valuable Feedback...."
                            className="rounded-lg ml-2 px-2"
                          />
                        </div>
                      </>
                    )}
                    <br />
                    <hr />
                    <button className="bg-blue-400 rounded-lg w-full mt-2 p-2 text-white hover:bg-blue-500 transition duration-500">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
