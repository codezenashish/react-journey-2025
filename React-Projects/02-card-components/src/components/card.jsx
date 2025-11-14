import React from "react";

const card = (props) => {
  console.log(props);

  return (
    <div className="  p-6 flex ">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-96 transition-all hover:shadow-2xl">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <div className="p-1.5 border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://play-lh.googleusercontent.com/5ZOQbuxacVOWK6AM4Env-adyEWRUCJt0VrUl9bWKW4Z4qLSjJUBuMP8-dALMy9oWu530"
              alt="logo"
            />
          </div>

          <button className="py-1.5 px-4 border border-gray-300 text-gray-500 rounded-xl hover:bg-gray-100 transition">
            Save <span>@</span>
          </button>
        </div>

        {/* Content */}
        <div className="mt-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold">{props.companyName}</h3>
              <p className="text-gray-500 text-sm font-medium">
                {props.postDays}
              </p>
            </div>

            <h2 className="text-2xl font-semibold capitalize text-gray-800">
              {props.jobRole}
            </h2>
          </div>

          {/* Tags */}
          <div className="flex gap-3 items-center mt-3">
            {props.tags.map((item, index) => (
              <p
                key={index}
                className="px-4 py-1 text-gray-600 border border-gray-300 rounded-lg bg-gray-50"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-black">
                {props.salary}
              </h3>
              <p className="text-gray-500 text-sm">{props.location}</p>
            </div>

            <button className="px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
