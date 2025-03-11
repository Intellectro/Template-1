import { motion } from "framer-motion";
import {logo as Logo} from "@/assets/index.ts";

const Loading = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F5E6E3] to-[#f0d9d3]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
            >
                <img
                    src={Logo}
                    alt="Kings Cleaning"
                    className="h-[60px] mb-2"
                />
            </motion.div>

            <div className="relative w-[220px] h-[220px] mb-10 flex items-center justify-center">
                <motion.div
                    className="w-full h-full flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className="absolute bottom-0 w-[180px] h-[40px] bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div 
                            className="absolute h-full bg-blue-100 opacity-30 rounded-lg"
                            initial={{ width: 0, left: "10%" }}
                            animate={{ 
                                width: ["0%", "80%", "0%"],
                                left: ["10%", "10%", "80%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-white"
                                style={{
                                    width: `${Math.random() * 4 + 2}px`,
                                    height: `${Math.random() * 4 + 2}px`,
                                    left: `${Math.random() * 180}px`,
                                    top: `${Math.random() * 40}px`,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: [0, 0.8, 0],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: Math.random() * 1.5 + 1,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        className="absolute bottom-[35px] right-[40px] w-[60px] h-[70px] rounded-t-lg rounded-b-xl bg-gradient-to-b from-blue-400 to-blue-500 overflow-hidden"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.div 
                            className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-[40px] h-[30px] border-t-[3px] border-l-[3px] border-r-[3px] border-gray-600 rounded-t-full"
                            animate={{ rotate: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <div className="absolute top-0 left-0 w-full h-[8px] bg-blue-600 rounded-t-lg" />
                        
                        <motion.div 
                            className="absolute top-[15px] left-[5px] w-[50px] h-[40px] bg-blue-200 opacity-70 rounded-lg"
                            animate={{ 
                                y: [-2, 2, -2],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.div 
                                className="absolute top-[10px] left-[10px] w-[30px] h-[2px] bg-blue-300 rounded-full"
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div 
                                className="absolute top-[18px] left-[15px] w-[20px] h-[2px] bg-blue-300 rounded-full"
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            />
                        </motion.div>
                        
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-white opacity-80"
                                style={{
                                    width: `${Math.random() * 6 + 3}px`,
                                    height: `${Math.random() * 6 + 3}px`,
                                    left: `${Math.random() * 40 + 10}px`,
                                    top: `${Math.random() * 20 + 20}px`,
                                }}
                                animate={{
                                    y: [-5, -15],
                                    opacity: [0.7, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 2 + 1,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                            />
                        ))}
                    </motion.div>
                    
                    <motion.div className="absolute bottom-[35px] left-[30px] origin-bottom"
                        animate={{ 
                            rotate: [-5, 10, -5],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div 
                            className="absolute bottom-0 left-0 w-[8px] h-[140px] bg-gradient-to-b from-[#A67C52] to-[#8A6642] rounded-full"
                        />
                        
                        <motion.div 
                            className="absolute bottom-[-5px] left-[-22px] w-[50px] h-[25px] bg-gray-200 rounded-lg"
                            animate={{ 
                                x: [0, 5, 0],
                                y: [0, -2, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Mop Strands */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bottom-0 bg-gray-300"
                                    style={{
                                        width: '3px',
                                        height: `${Math.random() * 10 + 15}px`,
                                        left: `${Math.random() * 44 + 3}px`,
                                        borderRadius: '2px',
                                    }}
                                    animate={{
                                        height: [`${Math.random() * 10 + 15}px`, `${Math.random() * 10 + 20}px`, `${Math.random() * 10 + 15}px`],
                                    }}
                                    transition={{
                                        duration: Math.random() * 1 + 1,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bottom-0 bg-blue-200 rounded-full opacity-70"
                                    style={{
                                        width: `${Math.random() * 3 + 2}px`,
                                        height: `${Math.random() * 3 + 2}px`,
                                        left: `${Math.random() * 44 + 3}px`,
                                    }}
                                    initial={{ y: 0 }}
                                    animate={{
                                        y: [0, 30],
                                        opacity: [0.7, 0],
                                    }}
                                    transition={{
                                        duration: Math.random() * 1 + 0.5,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.h2
                className="text-2xl font-bold text-gray-700 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Preparing Your Space
            </motion.h2>

            <motion.p
                className="text-gray-500 text-center max-w-[280px] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                Transforming your space, one sparkle at a time
            </motion.p>

            <motion.div
                className="flex space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                        animate={{
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Loading;