import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div className="col-lg-12 col-sm-12 form-group">
          <input
            type="text"
            placeholder="Name"
            className="joinInput form-control"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="col-md-12 col-sm-12 form-group">
          {" "}
          <input
            type="text"
            placeholder="Room"
            className="joinInput form-control"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <Link
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="btn btn-primary " type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Join;
