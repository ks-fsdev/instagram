import users from "../Users";
import UserCard from "../components/UserCard";

function Requests() {
  return (
    <>
      <div className="mx-auto w-[400px] text-center my-10">
        <h1 className="text-3xl text-center  font-black text-black">
          Check your requests!
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae illum
          quasi possimus tempore totam rerum itaque asperiores ipsa ea cum?
        </p>
      </div>

      <div className="mb-30">
        {users.map((user) => (
          <UserCard
            img={user.img}
            name={user.name}
            username={user.userName}
            prof={user.profession}
            isAccepted={user.isAccepted}
          />
        ))}
      </div>
    </>
  );
}

export default Requests;
