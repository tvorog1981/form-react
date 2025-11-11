import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className=" flex gap-1 bg-amber-300 justify-center items-center mb-2 container mx-auto">
      <NavLink
        className="uppercase font-bold text-white p-2 hover:text-teal-500"
        to={"/"}
      >
        Main
      </NavLink>
      <NavLink
        className="uppercase font-bold text-white p-2 hover:text-teal-500"
        to={"/form"}
      >
        FORM
      </NavLink>
      <NavLink
        className="uppercase font-bold text-white p-2 hover:text-teal-500"
        to={"/form-yup"}
      >
        FORM YUP
      </NavLink>
    </nav>
  );
}
