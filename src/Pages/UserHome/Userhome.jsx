import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Rocket, Trophy, Clock, Star, ArrowUpRight } from "lucide-react";

// Mock data for user participation history
const participationData = [
  { name: "Week 1", entries: 2 },
  { name: "Week 2", entries: 5 },
  { name: "Week 3", entries: 3 },
  { name: "Week 4", entries: 8 },
];

// Mock data for win/loss ratio
const winRatioData = [
  { name: "Won", value: 4 },
  { name: "Participated", value: 12 },
];
const COLORS = ["#10b981", "#e5e7eb"];

const Userhome = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header with Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back, Creative! 👋
        </h1>
        <p className="text-slate-500">
          Ready to win your next challenge? Here’s your progress.
        </p>
      </div>

      {/* User Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <UserStatCard
          title="Active Participations"
          value="05"
          icon={<Rocket size={20} className="text-indigo-600" />}
          bgColor="bg-indigo-50"
        />
        <UserStatCard
          title="Total Wins"
          value="04"
          icon={<Trophy size={20} className="text-yellow-600" />}
          bgColor="bg-yellow-50"
        />
        <UserStatCard
          title="Upcoming Deadlines"
          value="02"
          icon={<Clock size={20} className="text-rose-600" />}
          bgColor="bg-rose-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-700">Participation Activity</h3>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              Last 30 Days
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={participationData}>
                <defs>
                  <linearGradient id="colorEntries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                />
                <YAxis hide />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="entries"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorEntries)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Win Ratio & Rank */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <h3 className="font-bold text-slate-700 mb-4 self-start">
            Win Ratio
          </h3>
          <div className="h-48 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={winRatioData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {winRatioData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-800">33%</span>
              <span className="text-xs text-slate-400 font-medium">
                Success
              </span>
            </div>
          </div>
          <div className="mt-4 w-full p-4 bg-slate-50 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-slate-700">
                Pro Member
              </span>
            </div>
            <ArrowUpRight size={18} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* Suggested Contests / Bottom Section */}
      <div className="mt-8 bg-indigo-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-indigo-100">
        <div>
          <h2 className="text-xl font-bold mb-2">Ready for a new challenge?</h2>
          <p className="text-indigo-100 text-sm opacity-90">
            There are 15 new contests available today in the Creative category.
          </p>
        </div>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors whitespace-nowrap">
          Browse All Contests
        </button>
      </div>
    </div>
  );
};

const UserStatCard = ({ title, value, icon, bgColor }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
    <div className="flex flex-col gap-3">
      <div
        className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          {value}
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default Userhome;
