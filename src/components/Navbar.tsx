import React, { useEffect, useState } from "react";
import styles from "../styles";
import { navs } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { IonList, IonItem, IonLabel, IonNavLink } from "@ionic/react";

type NavbarProps = {
  title: string;
};

const Navbar = (props: NavbarProps) => {
  const [active, setActive] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={`border-gray-200 w-full`}>
      <div className={`mx-[64px] flex justify-between items-center`}>
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-nunito font-semibold whitespace-nowrap dark:text-white">
            Darwin Botanical Garden
          </span>
        </a>

        <ul>
          <li>
            {navs.map((nav) => (
              <NavLink
                to={nav.url}
                className={`
                  ${
                    active === nav.url ? "text-primary font-bold" : ""
                  } text-sm p-3 font-medium`}
              >
                {nav.title}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
