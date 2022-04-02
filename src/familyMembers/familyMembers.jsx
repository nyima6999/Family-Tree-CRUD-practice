import React from "react";
import { useState } from "react";
import SingleFamilyMembers from "./singleFamilyMembers/singleFamilyMembers";
import NewFamilyMembers from "./newFamilyMembers/newFamilyMembers";
import { useEffect } from "react";

const FamilyMembers = () => {
  const [Family, setFamily] = useState([]);
  //  { _id: "1", name: "John", relationship: "Father", gender: "Male" },
  // fetching api
  const [requestError, setRequestError] = useState("");
  const [newFamilyServerError, setNewFamilyServerError] = useState("");

  const createNewFamily = async (newFamily) => {
    console.log(newFamily);
    console.log("let create this");
    console.log(newFamily);
    // setFamily([newFamily, ...Family]);

    const apiResponse = await fetch("http://localhost:3003/family", {
      method: "POST",
      body: JSON.stringify(newFamily),
      headers: {
        "Content-type": "application/json",
      },
    });

    const parsedResponse = await apiResponse.json();
    console.log(parsedResponse);
    if (parsedResponse.success) {
      setFamily([parsedResponse.data, ...Family]);
    } else {
      setNewFamilyServerError(parsedResponse.data);
    }
  };

  const deleteFamily = async (idToDelete) => {
    try {
      const apiResponse = await fetch(
        `http://localhost:3003/family/${idToDelete}`,
        {
          method: "DELETE",
        }
      );
      const parsedResponse = await apiResponse.json();
      console.log(parsedResponse);
      if (parsedResponse.success) {
        console.log("deleting family id" + idToDelete);
        const newFamily = Family.filter((family) => family._id !== idToDelete);
        setFamily(newFamily);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateFamily = async (idToUpdate, familyToUpdate) => {
    const apiResponse = await fetch(
      `http://localhost:3003/family/${idToUpdate}`,
      {
        method: "PUT",
        body: JSON.stringify(familyToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parsedResponse = await apiResponse.json();
    if (parsedResponse.success) {
      const newFamily = Family.map((family) =>
        family._id === idToUpdate ? familyToUpdate : family
      );
      setFamily(newFamily);
    } else {
      setRequestError(parsedResponse.data);
    }
  };

  const getFamily = async () => {
    try {
      const Family = await fetch("http://localhost:3003/family");
      const parsedFamily = await Family.json();
      setFamily(parsedFamily.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getFamily, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const Family = await fetch("http://localhost:3003/family");
  //     const parsedFamily = await Family.json();
  //     setFamily(parsedFamily.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Family Members</h1>
      <NewFamilyMembers
        requestError={requestError}
        newFamilyServerError={newFamilyServerError}
        createNewFamily={createNewFamily}
      ></NewFamilyMembers>
      {Family.reverse().map((family) => {
        return (
          <SingleFamilyMembers
            key={family._id}
            family={family}
            deleteFamily={deleteFamily}
            updateFamily={updateFamily}
          ></SingleFamilyMembers>
        );
      })}
    </div>
  );
};

export default FamilyMembers;
