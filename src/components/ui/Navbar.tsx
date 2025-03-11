import {logo} from "@/assets/index.ts";
import { _pageRoutes_ } from "@/routers/data/index.ts";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import {motion} from "framer-motion";


interface NavbarProps {
    isOpen: boolean;
    handleToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({isOpen, handleToggleMenu}) => {
    const _elementsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const displayHoverEffect = (e: React.MouseEvent<HTMLElement>) => {
        if ("stopPropagation" in e) e.stopPropagation();
        const _element_ = e.currentTarget;
        const _active_link_props_ = ["underline", "text-cardOne"];
        _elementsRef.current!.forEach(_node => _node!.classList.remove(..._active_link_props_));
        _element_.classList.add(..._active_link_props_);
    }
    const cancelHoverEffect = () => {
        _elementsRef.current.forEach(_node => _node?.classList.remove(...["underline", "text-cardOne"]));
    }

    useEffect(() => {
        document.body.addEventListener("mouseover", cancelHoverEffect);
        return () => document.body.removeEventListener("mouseover", cancelHoverEffect);
    }, []);
    return(
        <div className={`${isOpen ? "bg-secondary" : ""} sticky z-50 top-0 left-0 backdrop-blur-[5px] w-full py-3 flex justify-between items-center px-10 md:px-30`}>
            <div className="w-[90px] md:w-[130px] h-[45px]">
                <img className="h-full w-full md:w-[90%] md:h-[90%]" src={logo} alt={logo.split("/").pop()?.split(".")[0]} />
            </div>
            <div className="flex gap-x-5 items-center">
                <div className="hidden md:flex gap-x-7">
                    {_pageRoutes_.map((_route_, index) => (
                        <Link onMouseOver={displayHoverEffect} ref={(el) => {
                            if (el) _elementsRef.current[index] = el;
                        }} to={_route_._path} key={index}>
                            <div className="text-[16.5px] capitalize">{_route_._name}</div>
                        </Link>
                    ))}
                </div>
                <div className="w-[35px] h-[35px] rounded-full bg-linear-[to_right,#7083c8_-50%,#e2bfcb_33%,#d098b3_86%,#7083c8_110%] flex justify-center items-center">
                    <FiPhone className="text-white" />
                </div>
                {!isOpen && <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.1, ease: "linear"}}><RiMenu3Line className="block md:hidden text-[20px]" onClick={handleToggleMenu} /></motion.div>}
                {isOpen && <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.1, ease: "linear"}}><LiaTimesSolid className="block md:hidden text-[20px]" onClick={handleToggleMenu} /></motion.div>}
            </div>
        </div>
    );
}

export default Navbar;