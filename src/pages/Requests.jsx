import { useState } from "react";
import users from "../Users";
import UserCard from "../components/UserCard";

function Requests() {
  const [usersData, setUsers] = useState(users);

  function requestUpdate(username) {
    setUsers((prev) => {
      const updated = prev.map((person) =>
        person.userName === username
          ? { ...person, reqAccepted: !person.reqAccepted }
          : person
      );
      // Find and log the updated user's reqAccepted value
      const updatedUser = updated.find(
        (person) => person.userName === username
      );
      console.log(`${username} reqAccepted:`, updatedUser?.reqAccepted);
      return updated;
    });
  }

  return (
    <>
      <div className="mx-auto md:w-[700px] w-full px-3 text-center my-10">
        <h1 className="text-3xl text-center  font-black text-black">
          Check your requests!
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae illum
          quasi possimus tempore totam rerum itaque asperiores ipsa ea cum?
        </p>
      </div>

      <div className="mb-30 px-3 mx-auto md:w-[700px] w-full ">
        {usersData.map((user) => (
          <UserCard
            key={user.userName}
            img={user.img}
            name={user.name}
            username={user.userName}
            prof={user.profession}
            isAccepted={user.reqAccepted}
            onToggle={() => requestUpdate(user.userName)}
          />
        ))}
      </div>
    </>
  );
}

export default Requests;
