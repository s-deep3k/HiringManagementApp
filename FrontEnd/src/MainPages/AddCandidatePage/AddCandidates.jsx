import React, { useState } from "react";
import axios from "axios";
import "./AddCandidates.css";

const AddCandidates = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    mobile: 0,
    yoe: 0.0,
    role: "",
    cskills: "",
    nperiod: "",
    expctc: "",
    btech: 0.0,
    relocate: "",
    status: "",
    feedback: "",
  });

  const onChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  let name = candidate.name,
    gender = candidate.gender,
    mobile = candidate.mobile,
    dob = candidate.dob,
    yoe = candidate.yoe,
    role = candidate.role,
    email = candidate.email,
    cskills = candidate.cskills,
    nperiod = candidate.nperiod,
    expctc = candidate.expctc,
    btech = candidate.btech,
    relocate = candidate.relocate;
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(candidate)
    console.log({
      name,
      dob,
      gender,
      mobile,
      yoe,
      role,
      email,
      cskills,
      nperiod,
      expctc,
      btech,
      relocate,
    });

    axios
      .post("http://localhost:8080/Project/addCandidate", {
        name,
        dob,
        gender,
        email,
        mobile,
        yoe,
        role,
        cskills,
        nperiod,
        expctc,
        btech,
        relocate,
      })
      .then((response) => {
        console.log(response.data);
        alert("New Candidate Added Successfully!");
        // console.log(candidate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-full p-10">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {/* <label>Applied For </label>
          <div className="flex form-row border rounded border-gray-300 my-3 bg-slate-100">
            <img
              className=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-1oQ248JyWcGdd7Eqh9kJLs8_LzE1aDFPd7jzNoR4FAQuL5141w_ocbs-2uZcoMSVYA&usqp=CAU"
              alt="CompanyPic"
            ></img>
            <p className="m-2 my-4">
              <span className="font-bold">Job Id :</span>1
              <br />
              <span className="font-bold">Company : </span>Capegemini
              <br />
              <span className="font-bold">Job Role : </span>FSD
              <br />
              <span className="font-bold">Required Experience : </span>
              <br />
              Capegemini
            </p>
          </div> */}
          <div className="form-row">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={candidate.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Gender</label>
            <div className="flex w-12 m-3">
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                className=""
                onChange={onChange}
              ></input>
              <label htmlFor="Male" className="my-1 ml-3">
                Male
              </label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                className=" ml-4"
                onChange={onChange}
              ></input>
              <label htmlFor="Female" className="my-1 ml-3">
                Female
              </label>
            </div>
          </div>

          <div className="form-row">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={candidate.mobile}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-row">
            <label>DOB(YYYY-MM-DD)</label>
            <input
              type="date"
              name="dob"
              value={candidate.dob}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Years of Experience</label>
            <input
              type="number"
              name="yoe"
              value={candidate.yoe}
              onChange={onChange}
            />
          </div>

          <div className="form-row">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={candidate.role}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={candidate.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Skills</label>
            <input
              type="text"
              name="cskills"
              value={candidate.cskills}
              onChange={onChange}
              required
            />
            <div className="form-row">
              <label>Are you serving notice period(Y/N)?</label>
              <div className="flex w-12 m-3">
                <input
                  type="radio"
                  id="Yes1"
                  name="nperiod"
                  value="Yes"
                  className=""
                  onChange={onChange}
                ></input>
                <label htmlFor="Yes1" className="my-1 ml-3">
                  Yes
                </label>
                <input
                  type="radio"
                  id="No1"
                  name="nperiod"
                  value="No"
                  className=" ml-4"
                  onChange={onChange}
                ></input>
                <label htmlFor="No1" className="my-1 ml-3">
                  No
                </label>
              </div>
            </div>
            <div className="form-row">
              <label>Expected CTC</label>
              <input
                type="text"
                name="expctc"
                value={candidate.expctc}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-row">
              <label>B.tech CGPA</label>
              <input
                type="text"
                name="btech"
                value={candidate.btech}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Are you willing to relocate(Y/N)?</label>
              <div className="flex w-12 m-3">
                <input
                  type="radio"
                  id="Yes2"
                  name="relocate"
                  value="Yes"
                  className=""
                  onChange={onChange}
                ></input>
                <label htmlFor="Yes2" className="my-1 ml-3">
                  Yes
                </label>
                <input
                  type="radio"
                  id="No2"
                  name="relocate"
                  value="No"
                  className=" ml-4"
                  onChange={onChange}
                ></input>
                <label htmlFor="No2" className="my-1 ml-3">
                  No
                </label>
              </div>
            </div>
          </div>
          <input type="submit" className="btn" value="Submit" />
          {/* <input
            type="button"
            onClick={getDetails}
            className="btn"
            value="Get Candidates"
          /> */}
        </div>
      </form>
    </div>
  );
};

export default AddCandidates;
