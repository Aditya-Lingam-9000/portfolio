import React from 'react';
import LogoLoop from './ui/LogoLoop';
import { skillsData } from '../data/skillsnew';

const SkillsNew = () => {
    return (
        <section className="py-10 bg-[#0b0b0b] text-white overflow-hidden relative" id="skills">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-8 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                    Skills in Progress
                </h2>

                <div className="max-w-5xl mx-auto border border-white/10 rounded-3xl p-6 md:p-8 bg-white/5 backdrop-blur-sm shadow-2xl">
                    {skillsData.map((category, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center border-b border-white/5 last:border-0 py-4 first:pt-2">

                            {/* Category Label */}
                            <div className="w-full md:w-32 flex-shrink-0 mb-4 md:mb-0">
                                <h3 className="text-lg text-gray-400 font-medium text-center md:text-left">
                                    {category.category}
                                </h3>
                            </div>

                            {/* Infinite Loop */}
                            <div className="flex-grow w-full overflow-hidden mask-gradient">
                                <LogoLoop
                                    logos={category.items}
                                    speed={index % 2 === 0 ? 50 : 40}
                                    direction="right"
                                    logoHeight={48}
                                    gap={20}
                                    pauseOnHover={true}
                                    hoverSpeed={0}
                                    scaleOnHover={true}
                                    fadeOut={true}
                                    fadeOutColor="#131313"
                                    className="w-full"
                                    renderItem={(item) => (
                                        <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 text-2xl md:text-3xl transition-all duration-300 filter grayscale-0 hover:grayscale opacity-100 hover:opacity-70">
                                            {item.node}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for mask gradient - Temporarily disabled for debugging
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style> 
      */}

        </section>
    );
};

export default SkillsNew;
