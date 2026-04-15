import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
} from "recharts";
import { LayoutGrid, Hourglass, DollarSign, TrendingUp } from "lucide-react";

// Mock data for analytics
const contestData = [
  { name: "Jan", count: 40 },
  { name: "Feb", count: 30 },
  { name: "Mar", count: 60 },
  { name: "Apr", count: 45 },
  { name: "May", count: 90 },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5500 },
  { name: "Apr", revenue: 4800 },
  { name: "May", revenue: 7200 },
];

const AdminHome = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Real-time insights for ContestHub operations.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-gray-400">
            Target Monthly Revenue
          </p>
          <p className="text-lg font-bold text-emerald-600">$10,000.00</p>
        </div>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Making Contests"
          value="128"
          icon={<LayoutGrid size={20} className="text-blue-600" />}
          bgColor="bg-blue-50"
        />
        <StatCard
          title="Pending Contests"
          value="14"
          icon={<Hourglass size={20} className="text-amber-600" />}
          bgColor="bg-amber-50"
        />
        <StatCard
          title="Total Revenue"
          value="$24,520"
          icon={<DollarSign size={20} className="text-emerald-600" />}
          bgColor="bg-emerald-50"
        />
        <StatCard
          title="Avg. Conversion"
          value="12.5%"
          icon={<TrendingUp size={20} className="text-purple-600" />}
          bgColor="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Analytics Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-700">
              Revenue Stream ($)
            </h3>
            <select className="text-xs border-none bg-gray-100 rounded-md p-1 focus:ring-0">
              <option>Last 5 Months</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "#f9fafb" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Contest Activity Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 mb-6">
            Contest Volume
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={contestData}>
                <defs>
                  <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorBlue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, bgColor }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors duration-200">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${bgColor}`}>{icon}</div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {title}
        </p>
        <h2 className="text-2xl font-black text-gray-800">{value}</h2>
      </div>
    </div>
  </div>
);

export default AdminHome;
