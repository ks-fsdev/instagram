import { useState } from "react";
import { Link } from "react-router-dom";

function UserCard({ img, name, prof, username, isAccepted }) {
  let [reqAccepted, reqAcceptedStatus] = useState(isAccepted);
  function requestHandler() {
    reqAcceptedStatus((prev) => !prev);
  }
  return (
    <>
      <div className="w-full">
        <div className="my-6 rounded-lg border bg-neutral-100 shadow-inner border-neutral-300 px-5 p-3 w-[98%] mx-auto flex justify-between items-center hover:shadow-lg">
          <Link to={`/${username}`} className="hover:cursor-pointer w-full">
            <div className="flex gap-3 items-center">
              <img
                className="w-10 h-10 sm:w-15 sm:h-15 object-cover rounded-full"
                src={img}
                alt={name}
              />
              <div className="">
                <p className="text-md sm:text-lg">{name}</p>
                <p className="text-xs sm:text-sm text-neutral-700">{prof}</p>
              </div>
            </div>
          </Link>
          <div className="">
            {reqAccepted ? (
              <button
                onClick={requestHandler}
                className="bg-neutral-300 text-neutral-700 w-full rounded-lg px-5 py-2 text-sm sm:text-md font-medium">
                Cancel
              </button>
            ) : (
              <button
                onClick={requestHandler}
                className="bg-blue-600 text-white w-full rounded-lg px-5 py-2 text-sm sm:text-md font-medium cursor-pointer active:scale-[0.99] active:bg-blue-800">
                Accept
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
