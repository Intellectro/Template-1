import { logo } from "@/assets";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.footer``;

const FooterInnerBox = styled.div``;
const FooterBox = styled.div``;
const FooterMiniTitle = styled.div``;
const FooterCenterBox = styled.div``;
const FooterStack = styled.div``;
const FooterImageHolder = styled.div``;
const FooterLinksBox = styled.div``;
const FooterLinkTitle = styled.div``;
const FooterLink = styled.div``;
const FooterFieldBox = styled.div``;
const FooterFieldTitle = styled.div``;
const FooterField = styled.div``;

const FooterButton = styled.button``;
const Footer = () => {
    return(
        <FooterWrapper className="px-10 md:px-30 relative z-10">
            <FooterInnerBox className="w-full md:w-[90%] pt-5 pb-10 px-5 mx-auto rounded-tr-2xl rounded-tl-2xl -mt-10 shadow-xl text-center">
                <FooterBox className="flex flex-col gap-y-6">
                    <FooterMiniTitle className="text-[15px] uppercase text-drop-shadow">Are You Ready?</FooterMiniTitle>
                    <FooterCenterBox className="flex flex-col gap-y-2 md:gap-y-1">
                        <AnimatedTitle title="Clean Spaces, Happy Faces!" />
                        <Link is="a" to="tel:+000000000">
                            <FooterButton className="uppercase text-[13.5px] font-[550] bg-[#343851] text-slate-100 py-2 px-5 md:py-3 md:px-7 rounded-full">schedule a call</FooterButton>
                        </Link>
                    </FooterCenterBox>
                    <FooterStack className="flex justify-center items-start gap-y-5 flex-wrap md:flex-nowrap">
                        <FooterImageHolder className="w-full">
                            <img className="w-[40%] md:w-[50%] h-[32px]" src={logo} alt={logo.split("/").pop()?.split(".")[0]} />
                        </FooterImageHolder>
                        <FooterLinksBox className="flex flex-col gap-y-2 w-full items-start">
                            <FooterLinkTitle className="text-[14.5px] font-[500]">Kings</FooterLinkTitle>
                            <FooterLink className="flex flex-col gap-y-1 items-start">
                                <Link to="#about" is="a" className="text-[14px] hover:underline">About Us</Link>
                                <Link to="#about" is="a" className="text-[14px] hover:underline">Core Values</Link>
                            </FooterLink>
                        </FooterLinksBox>
                        <FooterLinksBox className="flex flex-col gap-y-2 w-full items-start">
                            <FooterLinkTitle className="text-[14.5px] font-[500]">Services</FooterLinkTitle>
                            <FooterLink className="flex flex-col gap-y-1 items-start">
                                <Link to="#services" is="a" className="text-[14px] hover:underline">Residential</Link>
                                <Link to="#services" is="a" className="text-[14px] hover:underline">Commercial</Link>
                                <Link to="#services" is="a" className="text-[14px] hover:underline">Special</Link>
                            </FooterLink>
                        </FooterLinksBox>
                        <FooterLinksBox className="flex flex-col gap-y-2 w-full items-start">
                            <FooterLinkTitle className="text-[14.5px] font-[500]">Contact</FooterLinkTitle>
                            <FooterLink className="flex flex-col gap-y-1 items-start">
                                <Link to="#contact" is="a" className="text-[14px] hover:underline">Phone</Link>
                                <Link to="#contact" is="a" className="text-[14px] hover:underline">Email</Link>
                                <Link to="#contact" is="a" className="text-[14px] hover:underline">Social</Link>
                            </FooterLink>
                        </FooterLinksBox>
                    </FooterStack>
                    <FooterFieldBox className="flex flex-col gap-y-2 items-center">
                        <FooterFieldTitle className="text-[17.5px] font-[550] tracking-wide">Join Our Newsletter</FooterFieldTitle>
                        <FooterField className="flex pr-3 py-2 border border-drop-shadow rounded-2xl">
                            <input type="text" className="w-full py-1 px-4 focus:outline-none" />
                            <button className="phone__gradient px-3 py-1 rounded-sm">Submit</button>
                        </FooterField>
                    </FooterFieldBox>
                </FooterBox>
            </FooterInnerBox>
        </FooterWrapper>
    );
}

export default Footer;