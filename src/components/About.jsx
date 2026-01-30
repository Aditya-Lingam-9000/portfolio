import { motion } from 'framer-motion';
import {
  User, MapPin, GraduationCap, Code, Sparkles,
  Brain, Rocket, Coffee, ChevronRight, Terminal,
  Cpu, Globe, Zap
} from 'lucide-react';
import portrait_image from '../images/MY_PORTRAIT.jpg';

const About = () => {
  const stats = [
    { label: 'Coding', value: '2y+', icon: <Code size={16} className="text-blue-400" />, color: 'from-blue-500/20 to-blue-600/5' },
    { label: 'Built', value: '15+', icon: <Rocket size={16} className="text-purple-400" />, color: 'from-purple-500/20 to-purple-600/5' },
    { label: 'Uptime', value: '99%', icon: <Cpu size={16} className="text-emerald-400" />, color: 'from-emerald-500/20 to-emerald-600/5' },
    { label: 'Focus', value: 'AI/ML', icon: <Brain size={16} className="text-orange-400" />, color: 'from-orange-500/20 to-orange-600/5' },
  ];

  const infoItems = [
    { label: 'Name', value: 'ADITYA LINGAM', icon: <User size={14} /> },
    { label: 'Location', value: 'Hyderabad, IN', icon: <MapPin size={14} /> },
    { label: 'Degree', value: 'B.Tech AI/ML', icon: <GraduationCap size={14} /> },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#050816]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <Sparkles size={12} className="text-primary" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted">The Profile</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                About <span className="text-gradient">Me</span>
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-sm md:text-right font-medium uppercase tracking-widest">
              Merging Machine Intelligence <br /> with Human-Centric Design.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Compact Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
                <img
                  src={portrait_image}
                  alt="ADITYA LINGAM"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Architect & Developer</p>
                    <p className="text-white font-medium italic text-sm">"I weave digital experiences with mathematical precision."</p>
                  </div>

                  {/* Inline Info Grid */}
                  <div className="grid gap-2 pt-2 border-t border-white/10">
                    {infoItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-white/60">
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-[11px] font-bold tracking-tight">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Narrative & Stats */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 flex-1"
              >
                <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed font-light">
                  <p>
                    I’m an AI/ML engineering student based in Hyderabad, driven by understanding exactly how
                    <span className="text-white font-medium"> silicon learns to think</span>.
                  </p>
                  <p>
                    I bridge the gap between complex back-end logic and seamless front-end aesthetics,
                    constantly iterating on projects that challenge the status quo.
                    I believe the future isn't just automated—it's <span className="text-primary font-medium italic">elegant</span>.
                  </p>
                </div>

                {/* Compact Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} border border-white/5 group`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 rounded-lg bg-white/5 text-white group-hover:rotate-12 transition-transform">
                          {stat.icon}
                        </div>
                        <span className="text-2xl font-black text-white tracking-tighter">{stat.value}</span>
                      </div>
                      <p className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em]">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Compact CTA */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative p-6 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap size={16} className="text-primary" fill="currentColor" /> Let's build.
                  </h4>
                  <p className="text-text-muted text-xs">Open to freelance and open-source ventures.</p>
                </div>
                <button
                  onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-6 py-3 bg-primary rounded-xl text-background font-black uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  My Toolkit <ChevronRight size={14} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


