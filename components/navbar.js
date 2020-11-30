import { useState } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useScrollPosition } from "./utils/hooks/useScrollPosition";

export default function Navbar() {
  const [menuShown, setMenuShown] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, []);

  console.log("isTopppp");
  console.log(isTop);

  const menus = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/works",
      display: "Karya",
    },
    {
      path: "/blog",
      display: "Blog",
    },
    {
      path: "/about",
      display: "Tentang",
    },
  ];

  return (
    <nav className="nav">
      <div className="nav-mobile">
        {menuShown && (
          <ul className="nav-menu-mobile">
            {menus.map((menu, index) => (
              <li key={`menu-${menu.path}-${index}`}>
                <Link href={menu.path}>
                  <a>{menu.display}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <FontAwesomeIcon
          icon={faBars}
          color="gray"
          size="2x"
          onClick={() => setMenuShown(!menuShown)}
        />
      </div>

      {/* non-mobile */}
      <div className="nav-non-mobile">
        <div>hazelpaper</div>
        <ul className="nav-menu-non-mobile">
          {menus.map((menu, index) => (
            <li key={`menu-${menu.path}-${index}`}>
              <Link href={menu.path}>
                <a>{menu.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .nav {
          width: 100%;
          position: fixed;
          bottom: 0;
          background-color: white;
          box-shadow: 1px 12px 19px 1px #888888;
          padding: 16px;
        }

        .nav-menu-mobile {
          padding: 0;
          margin: 0;
          width: 100%;
          margin-bottom: 16px;
        }

        .nav-non-mobile {
          display: none;
        }

        li {
          list-style-type: none;
        }

        .nav-menu-non-mobile {
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          .nav {
            top: 0;
            bottom: auto;
            box-shadow: ${isTop ? "none" : " 1px 1px 22px -6px #888888"};
            height: 64px;
          }

          .nav-mobile {
            display: none;
          }

          .nav-non-mobile {
            display: flex;
            justify-content: space-between;
            max-width: 1192px;
            margin: auto;
          }

          .nav-menu-non-mobile {
            display: flex;
            margin: 0;
          }
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
        }

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
        }
      `}</style>
    </nav>
  );
}
