'use client';

import React, { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Code, TrendingUp, MapPin, ChevronRight, Zap, GraduationCap, User } from 'lucide-react';

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle Mount & Preloader timing
  useEffect(() => {
    setIsMounted(true);
    // The boot sequence lasts 2.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`min-h-screen bg-[#020202] text-white selection:bg-cyan-500/30 relative font-sans cursor-none ${isLoading ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      
      {/* 1. CUSTOM FLUID CURSOR */}
      {isMounted && <CustomCursor />}

      {/* 2. CINEMATIC PRELOADER (BOOT UP SEQUENCE) */}
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* 3. CINEMATIC FILM GRAIN NOISE */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.04] mix-blend-screen">
        <svg className="absolute inset-0 w-full h-full">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 4. DYNAMIC GLOWING ORBS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[120px]" 
        />
        <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1], x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/20 blur-[150px]" 
        />
      </div>

      {/* MAIN CONTENT (Fades in after preloader) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
          {/* FLOATING GLASS NAVBAR */}
          <motion.nav 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isLoading ? -100 : 0, opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
              <span className="font-bold tracking-widest text-sm text-zinc-200">HG.</span>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <HoverLink href="#about">About</HoverLink>
                  <HoverLink href="#projects">Work</HoverLink>
              </div>
          </motion.nav>

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24">
            
            {/* --- HERO SECTION --- */}
            <section className="mb-32 flex flex-col items-center text-center">
                <Magnetic>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.1)] cursor-pointer"
                    >
                        <Zap size={14} className="mr-2 animate-pulse" />
                        Available for Summer 2026 Internships
                    </motion.div>
                </Magnetic>
                
                {/* RESPONSIVE HERO TEXT FIX */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-800 bg-clip-text text-transparent">
                    HARGUN<br/>GHOTRA
                </h1>

                {/* MAGNETIC SOCIAL LINKS */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Magnetic><SocialBtn icon={<GithubIcon />} href="https://github.com/HargunSinghGhotra" /></Magnetic>
                    <Magnetic><SocialBtn icon={<LinkedinIcon />} href="https://www.linkedin.com/in/hargunghotra" /></Magnetic>
                    <Magnetic><SocialBtn icon={<Mail size={18} />} href="mailto:hargun@vt.edu" /></Magnetic>
                    <Magnetic><SocialBtn icon={<FileText size={18} />} label="View Resume" href="/resume.pdf" special /></Magnetic>
                </div>
            </section>

            {/* --- THE NEW ABOUT SECTION --- */}
            <section id="about" className="mb-40">
                <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter">About Me</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Centered Profile & Summary (No Fade) */}
                    <TiltCard className="lg:col-span-2 p-8 min-h-[22rem] h-full flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md">
                                <User size={20} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">The Architect</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light max-w-lg mx-auto">
                                I am a passionate developer bridging the gap between <span className="text-cyan-400 font-medium">Systems Engineering</span> and <span className="text-violet-400 font-medium">Financial Analytics</span>. I build intelligent, high-performance applications that solve real-world problems.
                            </p>
                        </div>
                    </TiltCard>

                    {/* Education */}
                    <TiltCard className="lg:col-span-1 p-8 min-h-[22rem] h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 text-orange-400">
                                <GraduationCap size={20} />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">Education</h3>
                            <p className="text-sm text-zinc-400 font-medium mb-6">Virginia Tech</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-xs text-zinc-400 bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <span className="text-white font-medium block mb-1">B.S. Computer Science</span>
                                Minor in Finance
                            </div>
                            <div className="text-xs font-mono text-orange-400/80 uppercase tracking-widest">
                                Est. May 2028
                            </div>
                        </div>
                    </TiltCard>

                    {/* Live Clock & Locations */}
                    <div className="lg:col-span-1 flex flex-col gap-6 min-h-[22rem] h-full">
                        {/* Centered Clock Widget (No Logo) */}
                        <TiltCard className="flex-1 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[10rem]">
                            <LiveClock />
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-3">Local Time (EST)</p>
                        </TiltCard>
                        
                        {/* Three Locations */}
                        <TiltCard className="flex-1 p-6 flex flex-col justify-center items-center gap-3 min-h-[10rem]">
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-violet-400 shrink-0" />
                                <span className="text-sm font-medium text-white">Blacksburg, VA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-violet-400 shrink-0" />
                                <span className="text-sm font-medium text-white">Charlottesville, VA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-violet-400 shrink-0" />
                                <span className="text-sm font-medium text-white">Santa Clara, CA</span>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </section>

            {/* --- TECHNOLOGY ARSENAL --- */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-40"
            >
                <TiltCard className="p-10 flex flex-col justify-center items-start">
                    <h3 className="text-2xl font-medium mb-6 flex items-center gap-3 text-white">
                        <Code className="text-violet-400" size={24} /> Technology Arsenal
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Python', 'Java', 'React', 'Next.js', 'Flask', 'Gemini API', 'SQL', 'OpenCV', 'Pandas'].map((tech) => (
                            <span key={tech} className="px-5 py-2.5 bg-white/[0.03] rounded-xl text-sm font-medium text-zinc-300 border border-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </TiltCard>
            </motion.section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter">Featured Builds</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard 
                        title="Intervue"
                        event="HackViolet 2026"
                        description="Full-stack interactive interview simulator. Features a realistic AI persona using Gemini 2.0 Flash, OpenAI Whisper for real-time transcription, and ElevenLabs for low-latency TTS."
                        tags={['React', 'Flask', 'Gemini API', 'ElevenLabs']}
                        delay={0}
                    />
                    <ProjectCard 
                        title="SpeakEasy AI Coach"
                        event="Winner: Best First-Time Hack @ VTHacks 13"
                        description="Real-time public speaking assistant processing audio/video with <500ms latency. Generates structured performance reports and fetches context-aware YouTube tutorials."
                        tags={['Python', 'OpenCV', 'AI', 'React']}
                        delay={0.2}
                    />
                    <ProjectCard 
                        title="DBWorkout Research"
                        event="Undergraduate Research Assistant"
                        description="Refactoring frontend components to improve SQL query visualization for 200+ students. Executing usability testing to optimize adaptive hint mechanisms."
                        tags={['SQL', 'EdTech', 'GitLab']}
                        delay={0}
                    />
                    <ProjectCard 
                        title="Market Analytics Engine"
                        event="CS2104 Final Project"
                        description="Real-time application aggregating live stock data via yfinance. Visualizes price action, SMA/EMA indicators, and parses news headlines to quantify market sentiment."
                        tags={['Pandas', 'Streamlit', 'Data Viz']}
                        delay={0.2}
                    />
                </div>
            </section>

            {/* FOOTER */}
            <footer className="mt-40 pb-10 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-medium uppercase tracking-wider">
                <p>© 2026 Hargun Ghotra.</p>
                <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/80 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                    Systems Operational
                </p>
            </footer>
          </div>
      </motion.div>
    </main>
  );
}

// --- BOOT UP PRELOADER COMPONENT ---
function Preloader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return p + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center text-white"
        >
            <div className="w-64">
                <div className="flex justify-between text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                    <span>Initializing</span>
                    <span>{progress > 100 ? 100 : progress}%</span>
                </div>
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-white"
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.2 }}
                    />
                </div>
            </div>
            {progress >= 100 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute text-3xl font-bold tracking-widest text-white mt-32 text-center px-4"
                >
                    HARGUN GHOTRA.
                </motion.div>
            )}
        </motion.div>
    );
}

// --- LIVE CLOCK WIDGET ---
function LiveClock() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!time) return <div className="text-3xl sm:text-4xl font-light text-white">--:--:--</div>;

    return (
        <div className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
    );
}


// --- ULTIMATE 3D / INTERACTIVE COMPONENTS ---

function Magnetic({ children }: { children: React.ReactElement }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: ReactMouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: ReactMouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl transition-colors hover:bg-white/[0.04] ${className}`}
        >
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}

function ProjectCard({ title, event, description, tags, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        >
            <TiltCard className="p-8 h-full flex flex-col group cursor-pointer min-h-[20rem]">
                <div className="relative z-10 flex-1">
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded">{event}</p>
                        <ChevronRight size={18} className="text-zinc-600 group-hover:text-white transition-all group-hover:translate-x-2 duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed text-sm font-light">{description}</p>
                </div>
                
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                    {tags.map((t: string) => (
                        <span key={t} className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wider shadow-sm">
                            {t}
                        </span>
                    ))}
                </div>
            </TiltCard>
        </motion.div>
    );
}

function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
            if (cursorRef.current) {
                cursorRef.current.animate(
                    { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` },
                    { duration: 300, fill: "forwards" }
                );
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-500 pointer-events-none z-[100] -ml-4 -mt-4 transition-transform ease-out hidden lg:block"
            />
            <div 
                ref={dotRef} 
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] -ml-[3px] -mt-[3px] hidden lg:block"
            />
        </>
    );
}

function HoverLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a href={href} className="relative group overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{children}</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
    );
}

function SocialBtn({ icon, href, label, special }: { icon: React.ReactNode, href: string, label?: string, special?: boolean }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 shadow-sm
                ${special 
                    ? 'bg-white text-black border-white hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'bg-transparent text-zinc-300 border-white/10 hover:bg-white/5 hover:border-white/30'
                }`}
        >
            {icon}
            {label && <span className="font-semibold text-sm">{label}</span>}
        </a>
    );
}

// --- SVG ICONS ---
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}