import React, { ReactNode } from "react";

interface ScreenProps {
    children: ReactNode
}

const Screen: React.FC<ScreenProps> = ({children}) => {
    const scrollBarStyling: React.CSSProperties = {
        scrollbarWidth: "none",
        scrollbarColor: "#8d95c5 #8d95c550"
    }
    return(
        <div className="w-screen h-screen !overflow-x-hidden overflow-y-auto" style={scrollBarStyling}>
            {children}
        </div>
    );
}

export default Screen;