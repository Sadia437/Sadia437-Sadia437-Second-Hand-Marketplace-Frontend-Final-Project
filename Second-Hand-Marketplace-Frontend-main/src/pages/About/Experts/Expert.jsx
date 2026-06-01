import React from "react";

const Expert = ({ special }) => {
  const { name, email, } = special;
  return (
    <div className="rounded-lg bg-base-200 mt-8 shadow-sm">
      <img
        className="p-3 mt-5 md:h-80 w-full object-cover"
        alt="img"
        src="/src/assets/images/professional headshot.webp"
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Expert;
