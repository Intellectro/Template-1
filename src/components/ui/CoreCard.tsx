import React, { useState } from "react";

interface CoreCardProps {
    _id: number;
    core_title: string;
    core_content: string;
}

const CoreCard: React.FC<CoreCardProps> = ({_id, core_title, core_content}) => {
    const [coreCardClasses] = useState<Array<string>>(["bg-core-card-one", "bg-core-card-two", "bg-core-card-three"]);
    return(
        <div id={`${_id}`} className={`flex-1 w-full min-h-[320px] flex justify-center items-center px-5 py-7 shadow-md rounded-3xl ${coreCardClasses[+_id - 1]}`}>
            <div className="flex flex-col gap-y-3">
                <div className="text-[15.5px] font-[550] text-center">{core_title}</div>
                <div className="text-[15px] font-[400] flex text-center items-center gap-x-2">{core_content}</div>
            </div>
        </div>
    );
}

export default CoreCard;