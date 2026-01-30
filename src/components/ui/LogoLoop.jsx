import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Implementation using Framer Motion for scroll-triggered entrance animation.
// Behavior: Enters from left, stops in middle. Resets when out of view.

const LogoLoop = memo(
    ({
        logos,
        gap = 32,
        renderItem,
        className,
        style
    }) => {

        // Container variants
        const containerVariants = {
            hidden: { opacity: 0, x: -100 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    staggerChildren: 0.1, // Stagger effect for items
                    delayChildren: 0.2
                }
            }
        };

        const itemVariants = {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
        };

        return (
            <div className={`overflow-hidden w-full ${className}`} style={style}>
                <motion.div
                    className="flex items-center justify-center flex-wrap md:flex-nowrap" // Center items
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }} // Reset when out of view, trigger when 50% visible
                    variants={containerVariants}
                    style={{ gap: gap }}
                >
                    {logos.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex-shrink-0">
                            {renderItem ? renderItem(item, index) : (
                                item.node || <img src={item.src} alt={item.title} />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        );
    }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
