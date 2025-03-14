import Banner from "@/components/ui/Banner";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar";
import Screen from "@/components/ui/Screen";
import Scroller from "@/components/ui/Scroller";
import DropDownMenu from "@/components/utils/DropDownMenu";
import { useEffect, useRef, useState } from "react";
import Services from "./holders/Services";
import About from "./holders/About";
import Core from "./holders/Core";
import Footer from "./Footer";

const Overview = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggleMenu = () => setIsOpen(prev => !prev);
    const [hashid, setHashId] = useState<string>("");

    const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        componentRefs.current.forEach(_node => {
            if (_node!.id.toLowerCase() === (hashid.startsWith("#") ? hashid.slice(1).toLowerCase() : hashid.toLowerCase())) _node?.scrollIntoView({behavior: "smooth", block: "start"});
        });
        setIsOpen(false);
    }, [hashid]);

    const handleHashPath = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if ("preventDefault" in e) e.preventDefault();
        const hashId = e.currentTarget.href.split("/").pop();
        setHashId(`${hashId}`);
    }

    const handleMenuDisplay = () => {
        const _window_width: MediaQueryList = window.matchMedia("(max-width: 768px)");
        if (isOpen) {
            if (_window_width.matches) {
                setIsOpen(true);
            }else {
                setIsOpen(false);
            }
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleMenuDisplay);
        return () => window.removeEventListener("resize", handleMenuDisplay);
    })
    return(
        <Screen setHashId={setHashId}>
            <Scroller>
                <Container>
                    <Navbar handleHashPath={handleHashPath} isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
                    {isOpen && <DropDownMenu handleHashPath={handleHashPath} isOpen={isOpen} />}
                    <Banner />
                    <Services ref={(el: HTMLDivElement) => {
                        if (el) componentRefs.current[0] = el;
                    }} id="services" />
                    <About ref={(el: HTMLDivElement) => {
                        if (el) componentRefs.current[1] = el;
                    }} id="about" />
                    <Core ref={(el: HTMLDivElement) => {
                        if (el) componentRefs.current[2] = el;
                    }} id="core" />
                    <Footer />
                </Container>
            </Scroller>
        </Screen>
    );
}

export default Overview;