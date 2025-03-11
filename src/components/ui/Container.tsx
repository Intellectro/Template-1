import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div className="container mx-auto relative">
            {children}
        </div>
    );
}

export default Container;