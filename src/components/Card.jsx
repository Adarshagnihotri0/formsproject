import React from "react";

function Card({ user, handleRemove, id }) {
  return (
    <div
      className="w-52 h-48 p-2 bg-white flex flex-col items-center overflow-hidden rounded-lg text-center text-balance"
    >
      <div className="w-12 h-12 rounded-full bg-red-600 mt-1 overflow-hidden">
        <img className="object-cover" src={user.image} alt="" />
      </div>
      <h1 className="mt-1 text-sm font-semibold text-center leading-none">{user.name}</h1>
      <h3 className="mt-1 text-xs opacity-60 font-semibold">
        {user.email}
      </h3>
      <p className="mt-2 text-xs leading-none">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minima?
      </p>
      <button onClick={() => handleRemove(id)} className="mt-4 px-3 py-1 text-xs text-white rounded-md bg-red-600">
        Remove It
      </button>
    </div>
  );
}

export default Card;
