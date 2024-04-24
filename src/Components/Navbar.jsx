import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">BookStore</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-medium">
            <Link to={"/"}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to={"/register"}>
              <li>
                <a>Register</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
