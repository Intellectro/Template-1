import Banner from "@/components/ui/Banner";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar";
import Screen from "@/components/ui/Screen";
import Scroller from "@/components/ui/Scroller";
import DropDownMenu from "@/components/utils/DropDownMenu";
import { useEffect, useState } from "react";
import Services from "./holders/Services";
import About from "./holders/About";
import Core from "./holders/Core";
import Footer from "./Footer";

const Overview = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggleMenu = () => setIsOpen(prev => !prev);

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
        <Screen>
            <Scroller>
                <Container>
                    <Navbar isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
                    {isOpen && <DropDownMenu isOpen={isOpen} />}
                    <Banner />
                    <Services />
                    <About />
                    <Core />
                    <Footer />
                </Container>
            </Scroller>
        </Screen>
    );
}

export default Overview;