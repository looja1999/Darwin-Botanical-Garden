import React, { useEffect, useState } from "react";
import styles from "../styles";
import { navs } from "../constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IonList, IonItem, IonLabel, IonNavLink } from "@ionic/react";
import { Logo } from "../assets";

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
    <nav className={`border-gray-200 w-full bg-white`}>
      <div
        className={`max-w-[1080px] mx-auto flex justify-between items-center`}
      >
        <Link to="/page/Home" className="flex items-center">
          <img
            src={Logo}
            className="h-10 mr-3"
            alt="Darwin Botanical Garden Logo"
          />
          <span className="self-center text-xl font-nunito font-semibold whitespace-nowrap dark:text-white hover:text-primary">
            Darwin Botanical Garden
          </span>
        </Link>

        <ul className="transition-all ease-in-out">
          <li>
            {navs.map((nav, index) => (
              <NavLink
                to={nav.url}
                className={`
                  ${
                    active === nav.url ? "text-primary font-bold" : ""
                  } text-sm p-3 font-medium border-b-2 border-white hover:border-primary`}
                key={index}
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
