import "@/styles/banner.css";
import {bubbleImage, truck} from "@/assets";
import {motion} from "framer-motion";
import bucket from "@/assets/icons/bucket.svg";
const Banner = () => {
    return(
        <div className="w-full pb-10 px-10 md:px-30 relative z-10">
            <div className="flex items-center">
                <div className="flex-[0.8] md:flex-[0.7]">
                    <div className="@container flex flex-col leading-tight">
                        <motion.div initial={{x: -100, rotate: "-45deg", opacity: 0, transition: {duration: 0.4, ease: "linear", delay: 0}, transformOrigin: "left"}} animate={{x: 0, opacity: 1, rotate: "0deg", transition: {duration: 0.4, ease: "linear"}}}><div className="text-[23px] @3xs:text-[25px] @2xs:text-[34px] @sm:text-[40px] @md:text-[45px] @lg:text-[50px] @xl:text-[70px] banner__font">Excellence in every</div></motion.div>
                        <motion.div initial={{x: -100, rotate: "-45deg", opacity: 0, transition: {duration: 0.4, ease: "linear", delay: 0.2}, transformOrigin: "left"}} animate={{x: 0, opacity: 1, rotate: "0deg", transition: {duration: 0.4, ease: "linear"}}}><div className="text-[23px] @3xs:text-[25px] @2xs:text-[34px] @sm:text-[40px] @md:text-[45px] @lg:text-[50px] @xl:text-[70px] banner__font">Sparkle, Precision</div></motion.div>
                        <motion.div initial={{x: -100, rotate: "-45deg", opacity: 0, transition: {duration: 0.4, ease: "linear", delay: 0.4}, transformOrigin: "left"}} animate={{x: 0, opacity: 1, rotate: "0deg", transition: {duration: 0.4, ease: "linear"}}}><div className="text-[23px] @3xs:text-[25px] @2xs:text-[34px] @sm:text-[40px] @md:text-[45px] @lg:text-[50px] @xl:text-[70px] banner__font">in every detail.</div></motion.div>
                    </div>
                </div>
                <div className="flex-[0.2] md:flex-[0.4] w-full h-fit">
                    <img src={truck} className="w-full object-center bounce__image object-contain h-full md:h-[380px]" alt={truck.split('/').pop()?.split('.')[0]} />
                </div>
            </div>
            <div className="text-[14.5px] md:text-[15px] mt-2 md:-mt-10 md:font-[400] leading-[1.35]">Transforming your space, One sparkle at a time.<br />It’s the same space, it’s a fresh space.</div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex items-center gap-x-3 mt-4"
            >
                <div className="text-[14px] bubbling cursor-pointer lg:text-[16px] flex gap-3 text-white items-center font-[600] phone__gradient w-fit py-2 pl-4 pr-2 rounded-full">
                    GET A FREE QUOTE{" "}
                    <img src={bucket} alt="" className="h-[15px] md:h-[30px]" />
                </div>
                <p className="flex items-center bubbling cursor-pointer text-white justify-center phone__gradient rounded-full h-[28px] w-[28px] md:h-[47px] md:w-[47px] text-[25px] font-bold">
                    ?
                </p>
            </motion.div>
            <div className="w-[350px] h-[250px] md:w-[450px] md:h-[450px] rounded-full blur-[388px] absolute -z-9 bg-drop-shadow/60 top-[10%] right-[-20%] md:right-[-10%]"></div>
            <img className="absolute -z-9 object-contain object-center right-0 bottom-0" src={bubbleImage} alt={bubbleImage.split("/").pop()?.split(".")[0]} />
        </div>
    );
}

export default Banner;