import { _pageRoutes_ } from "@/routers/data";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface DropDownMenuProps {
    isOpen: boolean;
    handleHashPath: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({isOpen, handleHashPath}) => {
    const [height, setHeight] = useState<string | number>("0px");
    const menuRef = useRef<HTMLDivElement | null>(null);
    const linkRef = useRef<(HTMLElement | null)[]>([]);

    

    useEffect(() => {
        if (isOpen) {
            setHeight(menuRef.current!.scrollHeight);
        }else {
            setHeight("0px");
        }
    }, [isOpen]);

    return(
        <AnimatePresence>
            <motion.div initial={{height: "0px", transition: {duration: 0.4, ease: "linear", delay: 0.2}}} animate={{height, opacity: 1, transition: {duration: 0.4, ease: "linear", delay: 0.1}}} className="w-full overflow-hidden fixed z-90 top-[10%] left-0 bg-secondary">
                <div className="w-full" ref={menuRef}>
                    <div className="flex flex-col">
                        {_pageRoutes_.map((_route, index) => (
                            <div className="py-3 text-center border-t border-t-amber-50 hover:bg-gray-200 hover:underline" key={index}>
                                <Link onClick={handleHashPath} ref={(el) => {
                                    if (el) linkRef.current[index] = el;
                                }} to={_route._path} className="capitalize text-[16.5px] font-[550]">{_route._name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default DropDownMenu;