import React from "react";

const AppHome = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl"
            >
              <div className="ml-6 pt-1">
                <p className="text-base text-gray-700 leading-normal">{item}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AppHome;
