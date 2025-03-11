import AnimatedText from "@/common/AnimatedText";
import React from "react";
import styled from "styled-components";

interface AnimateProps {
    title: string;
}

const AnimateConfig = styled.div``;

const AnimatedTitle: React.FC<AnimateProps> = ({title}) => {
    return(
        <AnimateConfig className="text-[25px] md:text-[45px] font-[400] text-drop-shadow leading-tight">
            <AnimatedText text={title} fontFamily={`"Righteous", sans-serif`} />
        </AnimateConfig>
    );
}

export default AnimatedTitle;