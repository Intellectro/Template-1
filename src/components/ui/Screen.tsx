import React, { ReactNode } from "react";

interface ScreenProps {
    setHashId: React.Dispatch<React.SetStateAction<string>>;
    children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({setHashId, children}) => {
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const _scrolltop = e.currentTarget.scrollTop;
        console.log(_scrolltop);
        if (_scrolltop <= 50) {
            setHashId("");
        }
        if (_scrolltop >= 4460) {
            setHashId("");
        }
    }

    const scrollBarStyling: React.CSSProperties = {
        scrollbarWidth: "none",
        scrollbarColor: "#8d95c5 #8d95c550"
    }
    return(
        <div onScroll={handleScroll} className="w-screen h-screen !overflow-x-hidden overflow-y-auto" style={scrollBarStyling}>
            {children}
        </div>
    );
}

export default Screen;