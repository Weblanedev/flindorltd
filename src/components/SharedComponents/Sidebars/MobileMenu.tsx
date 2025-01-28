
import menu_data from "@/data/menu-data";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React, { useState } from "react";
const MobileMenu = () => {
  const {toggleSideMenu} =  useGlobalContext()
  const [openSubMenu, setopenSubMenu] = useState(false);
  const [subMenuNum, setsubMenuNum] = useState(0);
  const [openMegaMenu, setopenMegaMenu] = useState(false);
  const [megaMenuNum, setmegaMenuNum] = useState(0);
  const handleActiveSubMenu = (index: number) => {
    setopenSubMenu(!openSubMenu);
    setsubMenuNum(index);
  };
  const handleActiveMegaMenu = (index: number) => {
    setopenMegaMenu(!openMegaMenu);
    setmegaMenuNum(index);
  };

  return (
    <>
      <ul>
        {menu_data?.map((item) => (
          <li key={item.id} className={`${ item.hasDropdown === true ? "menu-item-has-children" : "mean-last"} ${openSubMenu && subMenuNum === item.id ? "dropdown-opened" : ""}`}>
            <Link onClick={toggleSideMenu} href={item.link}>{item?.title}</Link>
            {item?.hasDropdown === true && (
              <ul className="sub-menu" style={{
                display: openSubMenu && subMenuNum === item.id ? "block" : "none",
            }}>
                {item?.submenus?.map((subItem, index) => (
                  <li
                    key={index}
                    className={`${
                      item?.megaMenu === true ? "menu-item-has-children" : ""
                    }`}
                  >
                    <Link onClick={toggleSideMenu} href={subItem.link}> {subItem.title} </Link>
                    {item?.megaMenu === true && (
                      <ul className="sub-menu" style={{
                        display: openMegaMenu && megaMenuNum === index? "block" : "none",
                    }}>
                        {subItem?.megaMenu?.map(
                          (megaItem: any, megaIndex: number) => (
                            <li key={megaIndex}>
                              <Link onClick={toggleSideMenu} href={megaItem.link}>{megaItem.title}</Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                    {subItem?.megaMenu?.length && (
                      <Link
                        onClick={()=>handleActiveMegaMenu(index)}
                        className={`mean-expand ${
                          openMegaMenu && megaMenuNum === index ? "mean-clicked" : ""
                        }`}
                        href="#"
                        style={{ fontSize: 18 }}
                      >
                        <i className="fal fa-plus"></i>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {item?.hasDropdown === true && (
              <Link
                onClick={() => handleActiveSubMenu(item.id)}
                className={`mean-expand ${
                  openSubMenu && subMenuNum === item.id ? "mean-clicked" : ""
                }`}
                href="#"
                style={{ fontSize: "18px" }}
              >
                <i className="fal fa-plus"></i>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
