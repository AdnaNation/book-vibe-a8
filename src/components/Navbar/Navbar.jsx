import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A]  && border && font-extrabold"
              : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] && border && font-extrabold"
              : "font-bold"
          }
          to="/listed"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] && border && font-extrabold"
              : "font-bold"
          }
          to="/pages"
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] && border && font-extrabold"
              : "font-bold"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] && border && font-extrabold"
              : "font-bold"
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl font-extrabold px-0">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex">{links}</ul>
      </div>
      <div className="navbar-end font-semibold">
        <a className="btn mr-3 bg-[#23BE0A]  text-white">Sign In</a>
        <a className="btn bg-[#59C6D2]  text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
