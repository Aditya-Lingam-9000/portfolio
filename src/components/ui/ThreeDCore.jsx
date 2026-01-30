import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Cpu, Brain, Network, Zap, Binary, CircuitBoard } from 'lucide-react';

const ThreeDCore = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mouse tilt effect - disabled on mobile
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

    // Scroll effect - reduced on mobile
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 0.9 : 0.8]);
    const yOffset = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 50 : 100]);

    useEffect(() => {
        if (isHovered && !isMobile) {
            document.body.setAttribute('data-no-cursor', 'true');
        } else {
            document.body.removeAttribute('data-no-cursor');
        }
    }, [isHovered, isMobile]);

    const handleMouseMove = (e) => {
        if (isMobile || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
        document.body.removeAttribute('data-no-cursor');
    };

    const icons = [
        { Icon: Brain, color: '#4079ff', delay: 0 },
        { Icon: Cpu, color: '#40ffaa', delay: 0.5 },
        { Icon: Network, color: '#ff4079', delay: 1 },
        { Icon: Zap, color: '#facc15', delay: 1.5 },
        { Icon: Binary, color: '#a855f7', delay: 2 },
        { Icon: CircuitBoard, color: '#10b981', delay: 2.5 },
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] perspective-[1000px] cursor-grab active:cursor-grabbing z-50"
            style={{ touchAction: isMobile ? 'auto' : 'none' }}
        >
            <motion.div
                style={{
                    rotateX: isMobile ? 0 : rotateX,
                    rotateY: isMobile ? 0 : rotateY,
                    scale,
                    y: yOffset,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 flex items-center justify-center"
            >
                {/* Central Core - The AI Brain */}
                <motion.div
                    animate={{
                        scale: isHovered && !isMobile ? [1, 1.1, 1] : [1, 1.05, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40 bg-gradient-to-tr from-primary via-secondary to-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                >
                    <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl animate-pulse" />
                    <Brain size={isMobile ? 20 : 24} className="text-white relative z-20" />
                </motion.div>

                {/* Orbiting Rings - simplified on mobile */}
                {[...Array(isMobile ? 2 : 3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            rotateX: isMobile ? 0 : [0, 360],
                            rotateY: isMobile ? [0, 360] : [360, 0],
                            rotateZ: i % 2 === 0 ? [0, 360] : [360, 0],
                        }}
                        transition={{
                            duration: isMobile ? 15 : (10 + i * 5),
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: isMobile ? `${(i + 1) * 20 + 60}%` : `${(i + 1) * 30 + 50}%`,
                            height: isMobile ? `${(i + 1) * 20 + 60}%` : `${(i + 1) * 30 + 50}%`,
                            border: `1px solid ${i === 1 ? 'rgba(64, 255, 170, 0.3)' : 'rgba(64, 121, 255, 0.2)'}`,
                            transformStyle: 'preserve-3d',
                        }}
                        className="absolute rounded-full pointer-events-none"
                    >
                        {/* Data Points on Rings - fewer on mobile */}
                        {[...Array(isMobile ? 2 : 4)].map((_, j) => (
                            <div
                                key={j}
                                style={{
                                    position: 'absolute',
                                    top: j % 2 === 0 ? '0%' : '100%',
                                    left: j < 2 ? '0%' : '100%',
                                    transform: 'translate(-50%, -50%)',
                                    width: isMobile ? '4px' : '8px',
                                    height: isMobile ? '4px' : '8px',
                                    backgroundColor: i === 1 ? '#40ffaa' : '#4079ff',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 10px currentColor'
                                }}
                            />
                        ))}
                    </motion.div>
                ))}

                {/* Floating Icons - simplified on mobile */}
                {!isMobile && icons.map(({ Icon, color, delay }, idx) => {
                    const angle = (idx / icons.length) * Math.PI * 2;
                    const radius = isHovered ? 180 : 150;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: isHovered ? x * 1.2 : x,
                                y: isHovered ? y * 1.2 : y,
                                z: isHovered ? 50 : 20,
                            }}
                            transition={{
                                delay: delay + 0.2,
                                duration: 0.8,
                                type: 'spring',
                                stiffness: 100,
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                            className="absolute z-20 p-3 rounded-xl bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl group hover:border-primary/50 transition-colors"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                            >
                                <Icon size={24} style={{ color }} />
                            </motion.div>

                            {/* Tooltip on Hover */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded text-[10px] text-white whitespace-nowrap border border-white/5">
                                Node {idx + 1}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Floating Background Particles - fewer on mobile */}
                {[...Array(isMobile ? 8 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            x: Math.random() * (isMobile ? 200 : 400) - (isMobile ? 100 : 200),
                            y: Math.random() * (isMobile ? 200 : 400) - (isMobile ? 100 : 200),
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                    />
                ))}
            </motion.div>

            {/* Interactive Instructions - only on desktop */}
            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0 : 0.6 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-text-muted pointer-events-none"
                >
                    Hover to explore the hub
                </motion.div>
            )}
        </div>
    );
};

export default ThreeDCore;
