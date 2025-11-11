import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" border-b p-3 border-neutral-300">
        <div className="md:w-[700px] w-[450px] mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-black">
            Instagram
          </Link>
          <div className="flex gap-5 font-semibold">
            <Link to="/requests">Requests</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
