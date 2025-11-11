import { useState } from "react";
import Users from "../Users";
import { useParams } from "react-router-dom";
import Posts from "../Posts";
import PostCard from "../components/PostCard";

function UserDetails() {
  let { username } = useParams();
  let userPosts = Posts.filter((post) => post.userName == username);

  let user = Users.find((user) => user.userName == username);
  let [isAccepted, isAcceptedStatus] = useState(user.isAccepted);

  function requestHandler() {
    isAcceptedStatus((prev) => !prev);
  }
  return (
    <>
      <div className="md:w-[700px] w-[450px] rounded-lg mx-auto mt-5 mb-10 px-3 py-6">
        <div className="flex justify-around md:justify-start md:gap-10">
          <img
            src={user.img}
            className="rounded-full w-[97px] h-[97px] md:w-[200px] md:h-[200px] object-cover"
            alt={user.name}
          />

          <div className=" w-[60%] md:w-[80%] md:text-xl flex flex-col">
            <p className="font-semibold text-lg md:text-2xl">{user.name}</p>
            <div className="flex mb-3 items-center gap-9 md:gap-12 my-3">
              <div className="text-center font-semibold">
                <p className="">{user.posts}</p>
                <p className="">Posts</p>
              </div>

              <div className="text-center font-semibold">
                <p className="">{user.followers}</p>
                <p className="">Followers</p>
              </div>

              <div className="text-center font-semibold">
                <p className="">{user.follows}</p>
                <p className="">Following</p>
              </div>
            </div>

            <div className="p-2 hidden md:block w-[90%]">
              <p className="text-neutral-500 font-semibold">
                {user.profession}
              </p>
              <p className="">{user.bio}</p>
            </div>
          </div>
        </div>

        <div className="p-2 w-[60%] block md:hidden">
          <p className="text-neutral-500 font-semibold">{user.profession}</p>
          <p className="">{user.bio}</p>
        </div>
        <div className="flex justify-end md:w-[80%]">
          <div></div>
          <button
            onClick={requestHandler}
            className={
              isAccepted
                ? "bg-neutral-300 text-neutral-700 w-full md:w-[300px] rounded-lg p-3 font-medium my-3 cursor-pointer active:scale-[0.99] active:bg-neutral-400"
                : "bg-blue-600 text-white w-full md:w-[300px] rounded-lg p-3 font-medium my-3 cursor-pointer active:scale-[0.99] active:bg-blue-800"
            }
          >
            {isAccepted ? "Cancel" : "Accept Request"}
          </button>
        </div>

        {userPosts.map((post) => {
          return (
            <PostCard
              img={post.media}
              username={post.userName}
              caption={post.caption}
              dp={user.img}
              date={post.date}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserDetails;
