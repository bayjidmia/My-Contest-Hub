import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import {
  PlusCircle,
  Users,
  MessageSquare,
  Zap,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

// Mock data for submission trends
const submissionTrends = [
  { day: "Mon", submissions: 12 },
  { day: "Tue", submissions: 18 },
  { day: "Wed", submissions: 15 },
  { day: "Thu", submissions: 25 },
  { day: "Fri", submissions: 32 },
  { day: "Sat", submissions: 28 },
  { day: "Sun", submissions: 40 },
];

const Creatorhome = () => {
  return (
    <div className="p-6 bg-[#fcfcfd] min-h-screen">
      {/* Creator Welcome & Quick Action */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Creator Studio
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your contests and track participant engagement.
          </p>
        </div>
        <Link to="/dashboard/add-contest">
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <PlusCircle size={18} />
            Create New Contest
          </button>
        </Link>
      </div>

      {/* Creator Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CreatorStat
          title="Live Contests"
          value="03"
          change="+1 this week"
          icon={<Zap size={20} className="text-orange-600" />}
          bgColor="bg-orange-50"
        />
        <CreatorStat
          title="Total Participants"
          value="842"
          change="+12% growth"
          icon={<Users size={20} className="text-blue-600" />}
          bgColor="bg-blue-50"
        />
        <CreatorStat
          title="Submission Rate"
          value="68%"
          change="High engagement"
          icon={<MessageSquare size={20} className="text-emerald-600" />}
          bgColor="bg-emerald-50"
        />
        <CreatorStat
          title="Creator Score"
          value="4.9"
          change="Top Rated"
          icon={<Zap size={20} className="text-purple-600" />}
          bgColor="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submission Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800">Submission Velocity</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span className="text-xs text-gray-400 font-medium">
                Daily Entries
              </span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={submissionTrends}>
                <defs>
                  <linearGradient
                    id="creatorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="stepAfter"
                  dataKey="submissions"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fill="url(#creatorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Review List */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Needs Review</h3>
          <div className="space-y-5">
            {[
              { id: 1, name: "Logo Design", count: 14 },
              { id: 2, name: "Landing Page", count: 8 },
              { id: 3, name: "Brand Guidelines", count: 5 },
            ].map((contest) => (
              <div
                key={contest.id}
                className="group flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-10 bg-indigo-100 group-hover:bg-indigo-500 transition-colors rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-700">
                      {contest.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {contest.count} new entries
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-indigo-500 transition-colors"
                />
              </div>
            ))}
            <button className="w-full mt-4 py-3 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
              Go to Submissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreatorStat = ({ title, value, change, icon, bgColor }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-xl ${bgColor}`}>{icon}</div>
      <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded">
        Metrics
      </span>
    </div>
    <div>
      <h2 className="text-2xl font-black text-gray-900 leading-tight">
        {value}
      </h2>
      <p className="text-sm font-bold text-gray-800 mt-1">{title}</p>
      <p className="text-xs text-emerald-500 font-medium mt-1">{change}</p>
    </div>
  </div>
);

export default Creatorhome;
