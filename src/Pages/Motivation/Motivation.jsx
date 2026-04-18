import React from "react";
import { NavLink } from "react-router";
import {
  Trophy,
  Target,
  Rocket,
  Lightbulb,
  Zap,
  TrendingUp,
} from "lucide-react";

const Motivation = () => {
  const quotes = [
    {
      text: "Success doesn't come to you, you go to it.",
      author: "Marva Collins",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Challenges are what make life interesting; overcoming them is meaningful.",
      author: "Unknown",
    },
  ];

  const cards = [
    {
      title: "Push Your Limits",
      content:
        "Every contest is a new opportunity to grow. Challenge yourself and never stop learning.",
      color: "from-indigo-600 to-blue-500",
      icon: <Target size={32} />,
    },
    {
      title: "Code & Conquer",
      content:
        "Write code, solve problems, and conquer new challenges. Your effort today shapes mastery.",
      color: "from-rose-600 to-pink-500",
      icon: <Trophy size={32} />,
    },
    {
      title: "Believe & Achieve",
      content:
        "Believe in your potential and never fear failure. Every mistake is a step closer to success.",
      color: "from-amber-500 to-orange-500",
      icon: <Rocket size={32} />,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO MOTIVATION HEADER */}
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0F172A] p-12 lg:p-20 shadow-2xl mb-20">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">
                <Zap size={14} className="fill-current" /> Mastery Awaits
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                ELEVATE YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 italic">
                  CRAFT.
                </span>
              </h1>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
                The distance between who you are and who you want to be is
                separated only by the contests you dare to enter. Push the
                boundaries of logic and design.
              </p>
              <NavLink to="/all-contest" className="inline-block">
                <button className="group relative px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl shadow-white/5 flex items-center gap-3">
                  Enter The Arena
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </NavLink>
            </div>

            {/* Quote Carousel-style Stack */}
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl transform transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
                >
                  <p className="text-slate-200 font-bold italic mb-2 leading-relaxed text-sm">
                    "{quote.text}"
                  </p>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">
                    — {quote.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INFORMATIVE SECTION: THE GROWTH ENGINE */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              The Growth Engine
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Decorative Icon Background */}
                <div
                  className={`absolute -right-4 -bottom-4 opacity-5 transition-transform duration-500 group-hover:scale-150`}
                >
                  {card.icon}
                </div>

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform transition-transform group-hover:rotate-12`}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY COMPETE SECTION: INFORMATIVE STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-indigo-600" /> WHY COMPETE?
            </h3>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Competitions are the ultimate shortcut to mastery. By joining the
              Contest Hub arena, you aren't just solving problems; you are
              building a verified pedigree of excellence.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase text-sm tracking-tight">
                    Rapid Skill Acquisition
                  </h4>
                  <p className="text-xs text-slate-500 font-bold">
                    Solve in 2 hours what others learn in 2 weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase text-sm tracking-tight">
                    Portfolio Building
                  </h4>
                  <p className="text-xs text-slate-500 font-bold">
                    Every win is a certificate of industry-ready talent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Growth"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-8">
              <p className="text-white font-black italic text-xl">
                " Mastery is not a destination, it's a continuous contest. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
