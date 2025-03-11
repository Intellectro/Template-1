import Card from "@/components/ui/Card";
import Demarcator from "@/components/ui/Demarcator";
import TitleHolder from "@/components/ui/TitleHolder";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { CardContentsProps } from "@/types/_cardcontents";
import { RootState } from "@/store/store";
import { bubbleImage } from "@/assets";

const MiniTitle = styled.div``;

const ColumnFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`;

const CardWrapper = styled.div`
    display: flex;
    column-gap: 2.5rem;
    row-gap: 1.5rem;
    flex-wrap: wrap;
`;

const FooterText = styled.div`
    font-weight: 500;
`;

const ServicesWrapper = styled.div`
    width: 100%;
`;
const ServicesInnerShadow = styled.div``;


const Services = () => {
    const _cardcontents: Array<CardContentsProps> = useSelector((state: RootState) => state._contents);
    const isPhoneView = useSelector((state: RootState) => state.isphoneview.isPhoneView);

    return(
        <ServicesWrapper id="services" className="relative z-10">
            <Demarcator title="Services" reverse={false} />
            <ColumnFlexbox>
                <TitleHolder title="What We Can Do For You?" />
                <MiniTitle className="px-10 md:px-30 text-[13.5px] md:text-[15px]">We offer a wide range of professional cleaning services to suit every space, ensuring a clean, hygienic, and welcoming{!isPhoneView && <br />} Enviroment</MiniTitle>
                <CardWrapper className="py-10 px-10 md:px-30">
                    {_cardcontents.map((content, index) => (
                        <Card {...content} key={index} />
                    ))}
                </CardWrapper>
                <FooterText className="text-pre px-10 md:px-30 text-[13px] md:text-[15.5px]">Let Us Handle The Mess, While You Enjoy A Fresh, Spotless Space.</FooterText>
            </ColumnFlexbox>
            <ServicesInnerShadow className="absolute bottom-[-26%] left-0 w-[70%] h-[105%] bg-drop-shadow/40 -z-10 blur-[500px] rounded-[4vmax]" />
            <img className="absolute -z-10 object-contain object-center left-[10%] top-[-2%]" src={bubbleImage} alt={bubbleImage.split("/").pop()?.split(".")[0]} />
        </ServicesWrapper>
    );
}

export default Services;