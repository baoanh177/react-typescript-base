import { FaCaretDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { menu } from "./menu";
import ChildMenuItem from "./ChildMenuItem";
import { useEffect, useRef } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const parentRef = useRef<HTMLLIElement>(null);
  const firstChildRef = useRef<HTMLUListElement>(null);
  const secondChild = useRef<HTMLUListElement>(null);
  const thirdChild = useRef<HTMLUListElement>(null);

  useEffect(() => {
    console.log(parentRef.current?.offsetLeft)
    console.log(firstChildRef.current?.offsetLeft, firstChildRef.current?.offsetWidth);
    const res = document.body.clientWidth;
    console.log("🦎 ~ NavBar ~ res:", res);
  });

  return (
    <>
      <nav className="relative z-10 flex h-[50px] select-none items-center bg-blue-500">
        <ul className="container flex h-full items-center gap-[30px]">
          {/* Root */}
          <li>
            <Link children={<IoHome />} to="/" className="text-2xl text-white" />
          </li>
          {menu.map((menuData, index) => {
            return (
              <li
                ref={parentRef}
                key={index}
                className="group/root relative flex h-full cursor-pointer items-center px-2 transition-colors hover:bg-blue-600"
                onClick={() => {
                  if (menuData.path) navigate(menuData.path);
                }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="uppercase">{menuData.label}</span>
                  {menuData.items && <FaCaretDown />}
                </div>

                {/* Child 1 */}
                {menuData.items && (
                  <ul ref={firstChildRef} className="absolute left-0 top-full invisible w-[300px] bg-white shadow group-hover/root:visible">
                    {menuData.items?.map((menuData) => (
                      <ChildMenuItem key={index} {...menuData} group="group/1">
                        {/* Child 2 */}
                        {menuData.items && (
                          <ul ref={secondChild} className="invisible absolute left-full top-0 w-[300px] bg-white shadow group-hover/1:visible">
                            {menuData.items?.map((menuData, index) => (
                              <ChildMenuItem key={index} {...menuData} group="group/2">
                                {/* Child 3 */}
                                {menuData.items && (
                                  <ul
                                    ref={thirdChild}
                                    className="invisible absolute left-full top-0 w-[300px] bg-white shadow group-hover/2:visible"
                                  >
                                    {menuData.items?.map((menuData, index) => <ChildMenuItem key={index} {...menuData} group="group/3" />)}
                                  </ul>
                                )}
                              </ChildMenuItem>
                            ))}
                          </ul>
                        )}
                      </ChildMenuItem>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
