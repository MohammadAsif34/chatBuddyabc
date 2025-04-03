import React from "react";

const Mssg = ({ type }) => {
  return (
    <div
      className={`w-full my-3  flex  ${type === "first" ? "justify-end" : ""}`}
    >
      <div
        className={`max-w-3/5 border border-gray-300 rounded-md px-2 py-1 ${
          type === "first" ? "bg-[#34f7c4] text-gray-500" : "text-gray-500"
        } `}
      >
        message Lorem ipsum, dolor sit amet consectetur adipisic hvhvmjj jing
        elit. Neque perspiciatis impedit repellendus nulla id delectus? Itaque
        repellendus nulla pariatur neque nisi consequuntur accusamus officiis
        aperiam, iure dolores tenetur quam ullam!
        <p className="text-[12px] float-end">
          2:208 <span className="bi bi-check2-circle"></span>
        </p>
      </div>
    </div>
  );
};

export default Mssg;
