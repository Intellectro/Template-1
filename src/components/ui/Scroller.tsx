import React, { ReactNode } from "react";

interface ScrollerProps {
    children: ReactNode
}

const Scroller: React.FC<ScrollerProps> = ({children}) => {
    return(
        <div className="w-full h-fit bg-primary">
            {children}
        </div>
    );
}

export default Scroller;