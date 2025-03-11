import AnimatedText from "@/common/AnimatedText";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface TitleProps {
    title: string;
}

const Title  = styled.div`
    font-weight: 400;
    font-family: "Righteous", sans-serif;
`;

const TitleHolder: React.FC<TitleProps> = ({title}) => {
    const titleRef = useRef<HTMLDivElement | null>(null);
    const [extractedClass, setExtractedClass] = useState<string>("");

    useEffect(() => {
        if (titleRef.current) {
            const {getComputedStyle} = window;
            const _fontFamily = getComputedStyle(titleRef.current).fontFamily;
            setExtractedClass(_fontFamily);
        }else {
            setExtractedClass("");
        }
    }, []);

    return(
        <Title ref={titleRef} className="px-10 md:px-30 text-drop-shadow leading-[1.2] text-[25px] md:text-[45px]">
            <AnimatedText text={title} fontFamily={extractedClass} />
        </Title>
    );
}

export default TitleHolder;