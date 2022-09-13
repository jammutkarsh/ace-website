import { useRef } from "react"
import { Link } from "react-router-dom";
import { navbarData } from "./navbar-data"

export default function Navbar() {
  const navbarDataRef = useRef(navbarData());
  return (
    <div className="navbar py-8 flex flex-row items-center justify-between">
      <div className="w-fit h-fit flex flex-row items-center justify-center p-2">
        <Link to="/">
          {navbarDataRef.current?.logo
            ? <img src={navbarDataRef.current?.logo} 
                alt="ace-logo"
                className="navbar-logo"
              />
            : <span className="font-product text-lg">ace</span>
          }
        </Link>
      </div>
      <div className="w-fit h-fit">
        <ul className="navbar-options-list flex flex-row items-center justify-end gap-5 text-sm font-normal font-product">
          {navbarDataRef.current?.navbarOptions?.map((navbarOption, navbarOptionIndex) => (
            <li className="navbar-option-item text-white hover:text-zinc-400 underline hover:no-underline" key={navbarOptionIndex}>
              {navbarOption?.path 
                ? <Link to={navbarOption?.path}>{navbarOption?.label}</Link>
                : <a href={navbarOption?.url} rel="noreferrer" target="_blank">{navbarOption?.label}</a>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}