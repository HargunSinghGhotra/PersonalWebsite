// app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Code, TrendingUp } from 'lucide-react';

// You would import these from where you pasted the ReactBits code
// import SplitText from '@/components/ui/SplitText'; 
// import TiltedCard from '@/components/ui/TiltedCard';
// import Squares from '@/components/ui/Squares'; 

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Layer (ReactBits 'Squares' or similar) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        {/* <Squares direction="diagonal" speed={0.5} borderColor="#333" hoverFillColor="#222" /> */}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        
        {/* HERO SECTION */}
        <section className="mb-24 mt-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Open to Summer 2026 Internships
                </div>
                
                {/* ReactBits SplitText would go here */}
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                  HARGUN<br />GHOTRA.
                </h1>

                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Sophomore CS Student at <span className="text-white font-medium">Virginia Tech</span>. 
                    Merging <span className="text-blue-400">Systems Engineering</span> with <span className="text-emerald-400">Financial Analytics</span>.
                </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <SocialBtn icon={<Github size={20} />} href="https://github.com/yourusername" />
                <SocialBtn icon={<Linkedin size={20} />} href="https://linkedin.com/in/yourusername" />
                <SocialBtn icon={<Mail size={20} />} href="mailto:your.email@vt.edu" />
                <SocialBtn icon={<FileText size={20} />} label="Resume" href="/resume.pdf" />
            </motion.div>
        </section>

        {/* BENTO GRID - SKILLS & STATS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
            <BentoBox className="md:col-span-2 bg-zinc-900/40 border-zinc-800">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Code className="text-blue-500" /> Core Stack
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Python', 'Java', 'React', 'Next.js', 'SQL', 'Gemini API'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-md text-sm text-zinc-300 border border-zinc-700">
                            {tech}
                        </span>
                    ))}
                </div>
            </BentoBox>

            <BentoBox className="bg-zinc-900/40 border-zinc-800">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <TrendingUp className="text-emerald-500" /> Finance
                </h3>
                <p className="text-sm text-zinc-400 mt-2">
                    Minor in Finance. Active investor tracking SPY/AAPL strategies. Building algorithmic trading dashboards.
                </p>
            </BentoBox>
        </section>

        {/* PROJECTS SECTION */}
        <section>
            <h2 className="text-3xl font-bold mb-10">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Project 1: SpeakEasy */}
                <ProjectCard 
                    title="SpeakEasy AI Coach"
                    description="Real-time public speaking assistant using Python, Flask & Gemini API. Winner of 'Best First-Time Hack' at VTHacks 13."
                    tags={['React', 'Python', 'AI']}
                    color="from-purple-500/20 to-blue-500/20"
                />

                {/* Project 2: DBWorkout */}
                <ProjectCard 
                    title="DBWorkout Research"
                    description="Undergraduate research assisting in the optimization of an interactive SQL learning platform at Virginia Tech."
                    tags={['SQL', 'EdTech', 'Research']}
                    color="from-orange-500/20 to-red-500/20"
                />

                {/* Project 3: Financial Analytics */}
                <ProjectCard 
                    title="Market Analytics Dashboard"
                    description="CS2104 Final Project. Visualizes stock data using yfinance API and Pandas for algorithmic insights."
                    tags={['Pandas', 'Data Viz', 'Finance']}
                    color="from-emerald-500/20 to-teal-500/20"
                />
            </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pb-10 border-t border-zinc-900 pt-10 flex justify-between text-zinc-500 text-sm">
            <p>© 2026 Hargun Ghotra</p>
            <p>Built with Next.js & ReactBits</p>
        </footer>
      </div>
    </main>
  );
}

// Sub-components for cleanliness
function SocialBtn({ icon, href, label }: { icon: React.ReactNode, href: string, label?: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" 
           className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all text-zinc-300">
            {icon}
            {label && <span>{label}</span>}
        </a>
    );
}

function BentoBox({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`p-6 rounded-2xl border backdrop-blur-sm ${className}`}>
            {children}
        </div>
    );
}

function ProjectCard({ title, description, tags, color }: any) {
    // This is where you would wrap with <TiltedCard> from ReactBits for the 3D effect
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className={`p-8 rounded-2xl border border-zinc-800 bg-gradient-to-br ${color} relative overflow-hidden group`}
        >
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
                <div className="flex gap-2">
                    {tags.map((t: string) => (
                        <span key={t} className="text-xs font-mono uppercase tracking-wider opacity-60">#{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}