import React from "react";

const Search = () => {
  return (
    <div className="bg-gray-200 h-screen">
      {/* Button Container */}
      <div className="bg-white px-4">
        <img
          className="h-12"
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
          alt=""
        />
      </div>
      {/* Input container */}
      <div className="bg-white flex items-center px-4 mb-2">
        {/* FormtoIcons */}
        <div className="w-10 flex flex-col mr-2 items-center">
          <img
            className="h-2.5"
            src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt=""
          />
          <img
            className="h-3"
            src="https://img.icons8.com/windows/50/9CA3AF/filled-circle.png"
            alt=""
          />
        </div>
        {/* input boxes */}
        <div className="flex flex-col flex-1 ">
          {/* Inputs */}
          <input
            className="h-10 bg-gray-200 my-2 rounded-lg p-2 outline-none border-none"
            placeholder="Enter Pickup location"
          ></input>
          <input
            className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none"
            placeholder="Where to?"
          ></input>
        </div>
        {/* Plus Icon */}
        <img
          className="w-10 h-10 bg-gray-200 rounded-full ml-3"
          src="https://img.icons8.com/ios/50/000000/plus-math.png"
          alt=""
        />
      </div>
      {/* Saved places */}
      <div className="flex">
        <img
          className="bg-gray-400 w-10 h-10 p-2 rounded-full"
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt=""
        />
        Saved Places
      </div>
      {/* Confirmed Location */}
    </div>
  );
};

export default Search;
