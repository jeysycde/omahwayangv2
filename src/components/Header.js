import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="border-gray-100 py-6 border-b-2 md:space-x-10">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={"/"} className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/logos/logo-black.png"}
              className="ml-3 h-6 sm:h-9"
              alt="Exova Logo"
            />
          </Link>
          <div className="group flex items-center md:order-2">
            <button
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className="hidden md:block flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={process.env.PUBLIC_URL + "/icons/icon-bg-rounded.png"}
                alt="user photo"
              />
            </button>
            <button className={"md:hidden flex mr-3"}>N</button>
            <Dropdown
              dropdown={dropdown}
              className={
                "group-hover:block top-12 2xl:right-48 md:right-20 list-none bg-white w-36 rounded shadow duration-500 transition"
              }
            >
              <li className={"border-b"}>
                <Link
                  to={"/"}
                  className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                >
                  Profil
                </Link>
              </li>
              <li className={"border-b"}>
                <Link
                  to={"/"}
                  className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                >
                  Pesanan Saya
                </Link>
              </li>
              <li className={"border-b"}>
                <Link
                  to={"/"}
                  className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                >
                  Log out
                </Link>
              </li>
            </Dropdown>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 rounded text-gray-600 md:bg-transparent md:text-blue-700 md:p-0 md:font-medium"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block py-2 pr-4 pl-3 font-medium text-gray-600 border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Jasa atau Freelancer
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 font-medium text-gray-600 border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
