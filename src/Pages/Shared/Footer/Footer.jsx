import React from "react";
import { Link } from "react-router";
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { Trophy, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Trophy className="text-white" size={22} />
              </div>
              <span className="text-2xl font-black text-primary tracking-tighter">
                Contest<span className="text-white italic">Hub</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              The premier arena for global talent. We architect high-stakes
              challenges that bridge the gap between skill and professional
              prestige.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <FaXTwitter />, link: "https://x.com" },
                { icon: <FaFacebookF />, link: "https://facebook.com" },
                { icon: <FaYoutube />, link: "https://youtube.com" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
                { icon: <FaGithub />, link: "https://github.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home Arena
                </Link>
              </li>
              <li>
                <Link
                  to="/all-contests"
                  className="hover:text-primary transition-colors"
                >
                  Active Contests
                </Link>
              </li>
              <li>
                <Link
                  to="/winners"
                  className="hover:text-primary transition-colors"
                >
                  Hall of Fame
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">
              Governance
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Combat
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Data Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primarytransition-colors"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>
                  123 Innovation Drive, <br /> Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) ARENA-CH</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hq@contesthub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center md:text-left">
            Copyright © {new Date().getFullYear()} —
            <span className="text-slate-400"> Contest Hub Industries Ltd.</span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
              System Status: Fully Operational
            </span>
          </div>
        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
