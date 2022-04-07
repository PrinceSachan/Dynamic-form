import React from "react";

const Details = ({ data }) => {
  return (
    <div className="box">
      <h3>
        User Name : <span className="font-normal">{data?.name}</span>{" "}
      </h3>
      <h3>
        Your Age : <span className="font-normal">{data?.age}</span>{" "}
      </h3>
      <h3>
        Your Gender : <span className="font-normal">{data?.gender}</span>{" "}
      </h3>
      <h3>
        Skills : <span className="font-normal">{data?.skills}</span>
      </h3>
    </div>
  );
};

export default Details;
