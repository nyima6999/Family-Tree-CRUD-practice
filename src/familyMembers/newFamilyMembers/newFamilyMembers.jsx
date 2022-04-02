import React from "react";
import { useState } from "react";

const NewFamilyMembers = (props) => {
  const [showing, setShowing] = useState(false);
  const [newFamily, setNewFamily] = useState({
    name: "",
    relationship: "",
    gender: "",
  });
  const toggleShowing = () => {
    setShowing(!showing);
  };

  // name input function
  const handleInputchanges = (e) => {
    setNewFamily({
      ...newFamily,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <>
        {showing ? (
          <div id="new-family-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.createNewFamily(newFamily);
                setNewFamily({
                  name: "",
                  relationship: "",
                  gender: "",
                });
              }}
              // {...(props.newFamilyServerError ? null : (
              //   <p className="form-error"> {props.newFamilyServerError} </p>
              // ))}
            >
              <div>
                <div>
                  <input
                    type="text"
                    minLength={4}
                    onChange={handleInputchanges}
                    name="name"
                    placeholder="name"
                    value={newFamily.name}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    onChange={handleInputchanges}
                    name="relationship"
                    placeholder="relationship"
                    value={newFamily.relationship}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    onChange={handleInputchanges}
                    name="gender"
                    placeholder="gender"
                    value={newFamily.gender}
                  />
                </div>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              {""}
              <div>
                <button onClick={toggleShowing}>Close</button>
              </div>
            </form>
          </div>
        ) : (
          <button onClick={toggleShowing}>Create</button>
        )}
      </>
    </div>
  );
};

export default NewFamilyMembers;
