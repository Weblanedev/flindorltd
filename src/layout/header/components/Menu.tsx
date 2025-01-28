import menu_data from "@/data/menu-data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item) => (
          <li key={item.id} className={`${item?.hasDropdown === true ? "menu-item-has-children" : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.hasDropdown === true && (
              <ul className="sub-menu">
                {item?.submenus?.length && (
                  <>
                    {item?.submenus.map((subItem, index) => (
                      <li key={index} className={`${subItem?.megaMenu?.length ? "menu-item-has-children" : ""}`}>
                        <Link href={subItem?.link}>{subItem?.title}</Link>
                        {item?.megaMenu === true &&
                          subItem?.megaMenu?.length && (
                            <>
                              <ul className="sub-menu">
                                {subItem?.megaMenu?.map(
                                  (megaItem: any, index: number) => (
                                    <li key={index}>
                                      <Link href={megaItem?.link}>
                                        {megaItem?.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
