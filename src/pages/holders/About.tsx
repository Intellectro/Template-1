import { cleaner } from "@/assets";
import Demarcator from "@/components/ui/Demarcator";
import { forwardRef, ReactNode} from "react";
import styled from "styled-components";
import React from "react";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

interface AboutStackprops {
    children: ReactNode;
}

interface AboutProps {
    id: string;
}

const AboutWrapper = styled.div`
    width: 100%;
`;

const ImageHolder = styled.div``;
const ContentHolder = styled.div``;
const ContentText = styled.div``;
const ColumnBox = styled.div``;
const AboutFragment = styled.div``;

const AboutStack: React.FC<AboutStackprops> = ({children}) => {
    return(
        <div className="w-full flex flex-col md:flex-row gap-x-5 gap-y-6">
            {children}
        </div>
    );
}

const About = forwardRef<HTMLDivElement, AboutProps>(({id}, ref: React.Ref<HTMLDivElement>) => {

    return(
        <AboutFragment ref={ref} className="w-full" id={id}>
            <Demarcator title="About" reverse={true} />
            <AboutWrapper className="py-10 px-10 md:px-32" id="about">
                <AboutStack>
                    <ImageHolder className="flex-1">
                        <img src={cleaner} alt={cleaner.split("/").pop()?.split(".")[0]} className="" />
                    </ImageHolder>
                    <ContentHolder className="flex-1 flex-col gap-y-3">
                        <ColumnBox className="flex flex-col gap-y-4">
                            <AnimatedTitle title="More than just a cleaning service" />
                            <ContentText className="text-[13.5px] md:text-[15.5px] leading-6 font-[450]">
                                King’s Precise Cleaning - Cleaning with Purpose, Building a Legacy” The story of King’s Precise Cleaning began with a dream—not just of building a successful business, but of creating a lasting legacy that would be passed down through generations. It all started with Valda King, who, inspired by the values of hard work, integrity, and care for others, saw an opportunity to not only provide a vital service to the community but also teach her family the true essence of entrepreneurship. What is starting as a small, humble cleaning service is aspired to grow into a well- respected brand, known for its excellence in residential and commercial cleaning. But beyond the spotless spaces, it’s the lessons learned along the way that truly define King’s Precise Cleaning. Valda King is building more than just a cleaning service. She is building a school of life—a place where each generation could understand the importance of perseverance, the rewards of self-reliance, and the power of a strong, supportive community.
                            </ContentText>
                        </ColumnBox>
                    </ContentHolder>
                </AboutStack>
            </AboutWrapper>
        </AboutFragment>
    );
})

export default About;