import React from "react";
import {motion} from "framer-motion";

interface DemarcatorProps {
    title: string;
    reverse: boolean;
}
const Demarcator: React.FC<DemarcatorProps> = ({title, reverse = false}) => {
    return(
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} gap-x-1 py-5 px-10 md:px-30 items-center`}>
            <div className="text-[15px] font-[550]">{title}</div>
            <motion.div initial={{width: "0%", height: "2px"}} whileInView={{width: "90%", height: "1px", transition: {duration: 0.7, delay: 0.2, ease: "linear"}}} className="bg-black/30 mx-auto" />
        </div>
    );
}

export default Demarcator;