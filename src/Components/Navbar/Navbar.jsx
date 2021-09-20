import React, { useState,useRef,useEffect } from 'react';
import {RiArrowDownSFill} from 'react-icons/all';
import { Dropdown } from '../Dropdown/Dropdown';
import './Navbar.css';

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }
const Navbar = () => {

    const [open, setOpen] = useState(false)
    const Dropdownref = useRef(null);
    useOnClickOutside(Dropdownref, () => setOpen(false));
    return (
        <nav className="w-full fixed top-0 h-16 flex justify-between items-center text-white px-8 md:px-10 z-50">
            <h1 className="text-xl">SDE CRACKER</h1>
            <div className="flex items-center relative">
                <label className="w-8 h-8 flex justify-center items-center rounded-full user mr-2">
                    <h1 className="text-lg mb-0">D</h1>
                </label>
                    <button className="border-0 outline-none" onClick={() => setOpen(!open)}><RiArrowDownSFill size={20} /></button>
                    {open ? <Dropdown ref={Dropdownref} /> : ''}
            </div>
        </nav>
    )
}

export default Navbar
