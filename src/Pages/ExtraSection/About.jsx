// import React from "react";
// import {
//   Trophy,
//   Zap,
//   Shield,
//   Globe,
//   ArrowRight,
//   Target,
//   Sparkles,
//   Cpu,
// } from "lucide-react";

// const About = () => {
//   return (
//     <section className="relative py-24 bg-[#0F172A] text-white overflow-hidden">
//       {/* Dynamic Background */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* TOP SECTION: THE HOOK */}
//         <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="h-px w-12 bg-primary"></div>
//               <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
//                 The Digital Colosseum
//               </span>
//             </div>
//             <h2 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
//               WE ARCHITECT <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
//                 EXCELLENCE.
//               </span>
//             </h2>
//           </div>
//           <div className="lg:max-w-sm pb-2">
//             <p className="text-slate-400 text-lg font-medium leading-relaxed border-l-2 border-primary/30 pl-6">
//               ContestHub is a high-performance ecosystem designed to turn raw
//               talent into industry-standard prestige. We don't just host
//               contests; we launch legacies.
//             </p>
//           </div>
//         </div>

//         {/* MIDDLE SECTION: TWO-PILLAR INFO GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {/* For Creators */}
//           <div className="group relative p-10 rounded-[2.5rem] bg-slate-800/40 border border-slate-700/50 hover:border-primary/50 transition-all duration-500">
//             <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors">
//               <Cpu size={60} strokeWidth={1} />
//             </div>
//             <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
//               <Target className="text-primary" /> FOR CREATORS
//             </h3>
//             <p className="text-slate-400 mb-6 leading-relaxed">
//               Scale your impact. Our platform provides enterprise-grade tools to
//               verify submissions, manage prize pools, and discover top-tier
//               talent through algorithmic shortlisting.
//             </p>
//             <ul className="space-y-3 text-sm font-bold text-slate-200">
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-primary" /> Automated
//                 Winner Selection
//               </li>
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-primary" /> Secure Escrow
//                 Payments
//               </li>
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-primary" /> Global
//                 Participant Reach
//               </li>
//             </ul>
//           </div>

//           {/* For Participants */}
//           <div className="group relative p-10 rounded-[2.5rem] bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500">
//             <div className="absolute top-8 right-8 text-indigo-500/20 group-hover:text-indigo-500 transition-colors">
//               <Sparkles size={60} strokeWidth={1} />
//             </div>
//             <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
//               <Trophy className="text-indigo-400" /> FOR COMPETITORS
//             </h3>
//             <p className="text-slate-400 mb-6 leading-relaxed">
//               Prove your worth. Compete in high-stakes arenas, build a verified
//               portfolio of victories, and claim rewards that match your skill
//               level on a global leaderboard.
//             </p>
//             <ul className="space-y-3 text-sm font-bold text-slate-200">
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-indigo-400" /> Verified
//                 Win Certificates
//               </li>
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-indigo-400" /> Real-time
//                 Skill Tracking
//               </li>
//               <li className="flex items-center gap-2 italic">
//                 <ArrowRight size={14} className="text-indigo-400" /> Direct
//                 Payout System
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: CORE VALUES (The Dashing Part) */}
//         <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-[3rem] p-12 border border-white/5">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="text-center md:text-left">
//               <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
//                 <Shield className="text-primary" size={28} />
//               </div>
//               <h4 className="text-xl font-black mb-3">ELITE SECURITY</h4>
//               <p className="text-slate-500 text-sm font-medium">
//                 Your data and transactions are protected by military-grade
//                 encryption and secure protocols.
//               </p>
//             </div>
//             <div className="text-center md:text-left">
//               <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
//                 <Zap className="text-indigo-400" size={28} />
//               </div>
//               <h4 className="text-xl font-black mb-3">INSTANT EXECUTION</h4>
//               <p className="text-slate-500 text-sm font-medium">
//                 From submission links to winner declarations, our infrastructure
//                 ensures zero-latency performance.
//               </p>
//             </div>
//             <div className="text-center md:text-left">
//               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
//                 <Globe className="text-white" size={28} />
//               </div>
//               <h4 className="text-xl font-black mb-3">GLOBAL ACCESS</h4>
//               <p className="text-slate-500 text-sm font-medium">
//                 No borders. No limits. Access the world's most exciting contests
//                 from anywhere at any time.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FINAL CTA */}
//         <div className="mt-20 text-center">
//           <button className="relative group overflow-hidden px-12 py-6 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-[0.3em] transition-all hover:scale-105">
//             <span className="relative z-10">Start Your Legacy Now</span>
//             <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-40 group-hover:animate-shine" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import {
  Trophy,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Target,
  Sparkles,
  Cpu,
} from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
      {/* Dynamic Background - Enhanced for both modes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP SECTION: THE HOOK */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
                The Digital Colosseum
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
              WE ARCHITECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400 dark:from-white dark:via-slate-400 dark:to-slate-600">
                EXCELLENCE.
              </span>
            </h2>
          </div>
          <div className="lg:max-w-sm pb-2">
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed border-l-2 border-primary/30 pl-6 italic">
              ContestHub is a high-performance ecosystem designed to turn raw
              talent into industry-standard prestige. We don't just host
              contests; we launch legacies.
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: TWO-PILLAR INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* For Creators */}
          <div className="group relative p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all duration-500">
            <div className="absolute top-8 right-8 text-primary/10 dark:text-primary/20 group-hover:text-primary transition-colors">
              <Cpu size={60} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-black mb-4 flex items-center gap-3 dark:text-white">
              <Target className="text-primary" /> FOR CREATORS
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Scale your impact. Our platform provides enterprise-grade tools to
              verify submissions, manage prize pools, and discover top-tier
              talent through algorithmic shortlisting.
            </p>
            <ul className="space-y-3 text-sm font-bold text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2 italic">
                <ArrowRight size={14} className="text-primary" /> Automated
                Winner Selection
              </li>
              <li className="flex items-center gap-2 italic">
                <ArrowRight size={14} className="text-primary" /> Secure Escrow
                Payments
              </li>
              <li className="flex items-center gap-2 italic">
                <ArrowRight size={14} className="text-primary" /> Global
                Participant Reach
              </li>
            </ul>
          </div>

          {/* For Participants */}
          <div className="group relative p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500">
            <div className="absolute top-8 right-8 text-indigo-500/10 dark:text-indigo-500/20 group-hover:text-indigo-500 transition-colors">
              <Sparkles size={60} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-black mb-4 flex items-center gap-3 dark:text-white">
              <Trophy className="text-indigo-500 dark:text-indigo-400" /> FOR
              COMPETITORS
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Prove your worth. Compete in high-stakes arenas, build a verified
              portfolio of victories, and claim rewards that match your skill
              level on a global leaderboard.
            </p>
            <ul className="space-y-3 text-sm font-bold text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2 italic">
                <ArrowRight
                  size={14}
                  className="text-indigo-500 dark:text-indigo-400"
                />{" "}
                Verified Win Certificates
              </li>
              <li className="flex items-center gap-2 italic">
                <ArrowRight
                  size={14}
                  className="text-indigo-500 dark:text-indigo-400"
                />{" "}
                Real-time Skill Tracking
              </li>
              <li className="flex items-center gap-2 italic">
                <ArrowRight
                  size={14}
                  className="text-indigo-500 dark:text-indigo-400"
                />{" "}
                Direct Payout System
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: CORE VALUES */}
        <div className="bg-slate-50  dark:bg-slate-800/40 rounded-[3rem] p-12 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Shield className="text-primary" size={28} />
              </div>
              <h4 className="text-xl font-black mb-3 dark:text-white">
                ELITE SECURITY
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                Your data and transactions are protected by military-grade
                encryption and secure protocols.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Zap
                  className="text-indigo-600 dark:text-indigo-400"
                  size={28}
                />
              </div>
              <h4 className="text-xl font-black mb-3 dark:text-white">
                INSTANT EXECUTION
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                From submission links to winner declarations, our infrastructure
                ensures zero-latency performance.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-slate-200/50 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Globe className="text-slate-700 dark:text-white" size={28} />
              </div>
              <h4 className="text-xl font-black mb-3 dark:text-white">
                GLOBAL ACCESS
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                No borders. No limits. Access the world's most exciting contests
                from anywhere at any time.
              </p>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <button className="relative group overflow-hidden px-12 py-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-xl">
            <span className="relative z-10">Start Your Legacy Now</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 dark:to-white/40 opacity-40 group-hover:animate-shine" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
