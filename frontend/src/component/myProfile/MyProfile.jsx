import React, { useState } from "react";

const MyProfile = () => {
  const [toggle, settoggle] = useState(null);
  const handleAccordian = (index) => {
    settoggle(toggle === index ? null : index);
  };
  return (
    <div className=" w-full h-full">
      <div className="w-full h-[180px] p-2 bg-[url(default_avatar.png)] bg-cover bg-no-repeat">
        <p className=" text-3xl text-white font-semibold text-shadow-2xs">
          My Profile
        </p>
      </div>
      <div className="  p-1 flex justify-center  mt-[-50px] ">
        <img
          src="default_avatar.png"
          className="w-[100px] h-[100px] p-1 bg-white object-cover rounded-full border border-gray-500 "
        />
      </div>
      <div className="pb-2 flex flex-col items-center border-b border-gray-300">
        <p className="text-xl ">name</p>
        <p className="text-md text-gray-500">{"about: iam busy"}</p>
        <p className="text-gray-500">
          <span className="bi bi-telephone pr-3"></span>+91 {"7250761747"}
        </p>
      </div>
      {/* accordian  */}
      <div className=" w-full mt-4 border-x border-t">
        <div className="w-full h-full px-2 border-b transition-transform duration-500 ">
          <div className="w-full h-10 flex items-center justify-between">
            <p>Personal info</p>
            <span
              className="bi bi-caret-down"
              onClick={() => handleAccordian(1)}
            ></span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              toggle === 1 ? "max-h-96 opacity-100 p-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className=" px-2">
              <li>
                <p>
                  Name
                  <span className="bi bi-pencil float-end text-sm text-gray-500"></span>
                </p>
                <input
                  type="text"
                  className=" w-full my-1 border border-gray-400 rounded-sm "
                />
              </li>
              <li>
                <p>
                  About
                  <span className="bi bi-pencil float-end text-sm text-gray-500"></span>
                </p>
                <input
                  type="text"
                  className=" w-full my-1 border border-gray-400 rounded-sm "
                />
              </li>
              <li>
                <p>
                  Email
                  <span className="bi bi-pencil float-end text-sm text-gray-500"></span>
                </p>
                <input
                  type="text"
                  className=" w-full my-1 border border-gray-400 rounded-sm "
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full px-2 flex flex-col border-b transition-transform duration-500 ">
          <div className="w-full h-10 flex items-center justify-between">
            <p>Privacy</p>
            <span
              className="bi bi-caret-down"
              onClick={() => handleAccordian(2)}
            ></span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              toggle === 2 ? "max-h-40 opacity-100 pb-2" : "max-h-0 opacity-0"
            }`}
          >
            <p>Who can see my personal info</p>
            <ul className="px-2">
              <li className=" w-full my-2 flex justify-between">
                Profile photo
                <select className="px-1 border border-gray-400 rounded-md text-sm text-gray-500">
                  <option value="">Everyone</option>
                  <option value="">Friend</option>
                  <option value="">Nobody</option>
                </select>
              </li>
              <li className=" w-full my-2 flex justify-between">
                Status
                <select className="px-1 border border-gray-400 rounded-md text-sm text-gray-500">
                  <option value="">Everyone</option>
                  <option value="">Friend</option>
                  <option value="">Nobody</option>
                </select>
              </li>
              <li className=" w-full my-2 flex justify-between">
                Groups
                <select className="px-1 border border-gray-400 rounded-md text-sm text-gray-500">
                  <option value="">Everyone</option>
                  <option value="">Friend</option>
                  <option value="">Nobody</option>
                </select>
              </li>
              <li className=" w-full my-2 flex justify-between">
                Groups
                <input type="checkbox" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full px-2  border-b transition-transform duration-500 ">
          <div className="w-full h-10 flex items-center justify-between">
            <p>Security</p>
            <span
              className="bi bi-caret-down"
              onClick={() => handleAccordian(3)}
            ></span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              toggle === 3 ? "max-h-40 opacity-100 pb-2 " : "max-h-0 opacity-0"
            }`}
          >
            <ul className=" px-2">
              <li className="flex justify-between">
                Show security notification <input type="checkbox" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full px-2 border-b transition-transform duration-500 ">
          <div className="w-full h-10 flex items-center justify-between">
            <p>Help</p>
            <span
              className="bi bi-caret-down"
              onClick={() => handleAccordian(4)}
            ></span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              toggle === 4 ? "max-h-40 opacity-100 pb-2 " : "max-h-0 opacity-0"
            }`}
          >
            <ul className=" px-2">
              <li>FAQs</li>
              <li>Contact</li>
              <li>Terms & Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
