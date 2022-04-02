import { useState } from "react";

const SingleFamilyMembers = (props) => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  };

  const [updateFamily, setUpdateFamily] = useState({
    name: props.family.name,
    relationship: props.family.relationship,
    gender: props.family.gender,
    _id: props.family._id,
  });

  const handleInputchanges = (e) => {
    setUpdateFamily({
      ...updateFamily,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="single-family">
      <div className="input-button">
        <h2>
          Name {""} {""}: {""}
          {""} {props.family.name}
        </h2>
        <h2>
          Relationship {""}
          {""}: {""} {""}
          {props.family.relationship}
        </h2>
        <h2>
          Gender {}
          {""}: {""} {""}
          {props.family.gender}
        </h2>
      </div>
      {/* <div> */}
      {/* <button
          className="delete-btn"
          onClick={() => {
            props.deleteFamily(props.family._id);
          }}
        >
          Delete
        </button>
      </div> */}

      <div className="edit-button">
        <>
          {showing ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.updateFamily(props.family._id, updateFamily);
              }}
            >
              <input
                type="text"
                minLength={4}
                onChange={handleInputchanges}
                name="name"
                placeholder="name"
                value={updateFamily.name}
              />

              <input
                type="text"
                onChange={handleInputchanges}
                name="relationship"
                placeholder="relationship"
                value={updateFamily.relationship}
              />
              <input
                type="text"
                onChange={handleInputchanges}
                name="gender"
                placeholder="gender"
                value={updateFamily.gender}
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <button onClick={toggleShowing}>Edit</button>
          )}
        </>
      </div>
      <div>
        <button
          className="delete-btn"
          onClick={() => {
            props.deleteFamily(props.family._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleFamilyMembers;
