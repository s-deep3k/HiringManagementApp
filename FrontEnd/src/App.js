import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MainPages/HomePage";
import LogIn from "./MainPages/LogInPage";
import SignUp from "./MainPages/SignUpPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
//import { GetCandidates } from "./MainPages/GetCandidatesPage";
//import AddCandidates from "./MainPages/AddCandidatePage/AddCandidates";
import JobsExplore from "./MainPages/ExploreJobsPage/xploreJobs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        {/* <Route path="/getCandidates" exact element={<GetCandidates />} />
        <Route path="/addCandidate" exact element={<AddCandidates />} /> */}
        <Route path="/jobsExplore" exact element={<JobsExplore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
