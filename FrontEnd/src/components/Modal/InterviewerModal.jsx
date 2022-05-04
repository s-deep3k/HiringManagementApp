import axios from "axios";
import React, { useEffect, useState } from "react";

export const InterviewerModal = (props) => {
  const [inter, setInterviewers] = useState([]);
  const { interviewer } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/getInterviewer/" + props.cId)
      .then((res) => {
        setInterviewers([...res.data]);
      });
  }, [props.cId]);
  let counter = 1;
  const block = (id) => {
    axios
      .post(
        "http://localhost:8080/Project/assignInterviewer/" +
          props.cId +
          "/" +
          id
      )
      .then((res) => {
        alert("Interviewer Assigned Successfully!");
        props.onClose();
      });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="bg-black bg-opacity-[85%] fixed z-40 inset-0"
          onClick={() => props.onClose()}
        ></div>
        <div className="bg-gray-50 top-28 w-1/2 z-50 absolute shadow-2xl shadow-gray-900 justify-center rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="container">
              <div className=" px-4 py-6">
                <h2 className="text-gray-800 text-3xl text-center font-bold pb-3">
                  Select Interviewer
                </h2>
                <hr />
                <div className="text-center">
                  {inter.length === 0 && interviewer === null && (
                    <p className="mt-4">
                      Sorry , no interviewers available at the moment. Check
                      again later!
                    </p>
                  )}
                  {interviewer !== null && (
                    <p className="mt-4 text-red-500">
                      You have Already Assigned an Interviewer! Best Of Luck!
                    </p>
                  )}
                  {interviewer === null &&
                    inter.map((each) => {
                      //console.log(each);
                      return (
                        <div className="py-3" key={each.id}>
                          <span className="">{counter++}. </span>
                          <span className="">
                            <strong>{each.name}</strong>({each.role},{each.yoe}{" "}
                            yrs of Experience)
                          </span>
                          <span className="animate-pulse ml-3">
                            {each.avfrom} <strong>to</strong> {each.avto}
                          </span>
                          <button
                            className="bg-green-600 border-2 ml-6 border-b-green-700 hover:bg-green-700 px-3 py-2 text-white rounded-xl "
                            onClick={() => block(each.id)}
                          >
                            Book Slot
                          </button>
                          <br />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
