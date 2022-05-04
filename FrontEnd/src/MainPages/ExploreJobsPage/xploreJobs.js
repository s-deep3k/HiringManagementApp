import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Candidates from "./Candidates";
import Roles from "./Roles";
const init = { view: false, candidates: [] };
function JobsExplore() {
  const navigate = useNavigate();
  const Auth = useSelector(({ auth }) => auth.isAuthenticated);
  if (!Auth) {
    navigate("/");
  }
  const [view1, setView1] = useState(init);
  const [view2, setView2] = useState(init);
  const [view3, setView3] = useState(init);
  const [view4, setView4] = useState(init);
  const showView4 = () => {
    axios
      .get("http://localhost:8080/Project/getCandidateByRole/consultant")
      .then((res) => {
        setView4({ view: true, candidates: res.data });
      });
  };
  const showView3 = () => {
    axios
      .get("http://localhost:8080/Project/getCandidateByRole/data-scientist")
      .then((res) => {
        setView3({ view: true, candidates: res.data });
      });
  };
  const showView2 = () => {
    axios
      .get("http://localhost:8080/Project/getCandidateByRole/analyst")
      .then((res) => {
        setView2({ view: true, candidates: res.data });
      });
  };
  const showView1 = () => {
    axios
      .get("http://localhost:8080/Project/getCandidateByRole/java-fsd")
      .then((res) => {
        setView1({ view: true, candidates: res.data });
      });
  };
  return (
    <div className="container mb-2 mx-auto w-full ">
      <p className="font-bold text-4xl p-8 text-stone-800">Job Roles</p>
      <ul className="flex flex-col p-8">
        <Roles
          role={"JAVA FSD"}
          onClick={showView1}
          onClose={() => setView1({ view: false, candidates: [] })}
        />
        {view1.view && (
          <ul className="flex flex-col p-6">
            {view1.candidates.map((each) => {
              return <Candidates key={each.id} {...each} />;
            })}
          </ul>
        )}
        <Roles
          role={"DATA SCIENTIST"}
          onClick={showView3}
          onClose={() => setView3({ view: false, candidates: [] })}
        />
        {view3.view && (
          <ul className="flex flex-col p-6">
            {view3.candidates.map((each) => {
              return <Candidates key={each.id} {...each} />;
            })}
          </ul>
        )}
        <Roles
          role={"ANALYST"}
          onClick={showView2}
          onClose={() => setView2({ view: false, candidates: [] })}
        />
        {view2.view && (
          <ul className="flex flex-col p-6">
            {view2.candidates.map((each) => {
              return <Candidates key={each.id} {...each} />;
            })}
          </ul>
        )}
        <Roles
          role={"CONSULTANT"}
          onClick={showView4}
          onClose={() => setView4({ view: false, candidates: [] })}
        />
        {view4.view && (
          <ul className="flex flex-col p-6">
            {view4.candidates.map((each) => {
              return <Candidates key={each.id} {...each} />;
            })}
          </ul>
        )}
      </ul>
    </div>
  );
}
export default JobsExplore;
