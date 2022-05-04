import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { Modal } from "../components/Modal/Modal";
export const GetCandidates = () => {
  const [data, setData] = useState([]);
  const [show, setModal] = useState(false);
  const [selectedCandidate, setCandidate] = useState(null);
  const openModal = (id) => {
    setCandidate(
      data.find((user) => {
        console.log(user);
        console.log(id);
        return user.id === id;
      })
    );
    console.log(selectedCandidate);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/showCandidate")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="p-6">
      {show && <Modal user={selectedCandidate} onClose={closeModal} />}
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <section className="grid grid-cols-5 gap-y-5 bg-gray-50 p-6 pb-10 shadow-gray-300 shadow-xl rounded-3xl font-medium mt-2">
        {data.map((user) => {
          return (
            <ProfileCard
              key={user.id}
              id={user.id}
              name={user.name}
              onClick={openModal}
            />
          );
        })}
      </section>
    </div>
  );
};
