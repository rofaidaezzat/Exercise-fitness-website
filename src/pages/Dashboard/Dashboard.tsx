import { Card, CardContent } from "../../component/ui/cards/card";
import { Button } from "../../component/ui/button/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Home, Dumbbell, LineChart, Users, Settings, Moon } from "lucide-react";

const dataBar = [
  { name: "Jan", calories: 3200 },
  { name: "Feb", calories: 2800 },
  { name: "Mar", calories: 3400 },
  { name: "Apr", calories: 4000 },
  { name: "May", calories: 3700 },
  { name: "Jun", calories: 3900 },
];

const dataPie = [
  { name: "Workout", value: 40 },
  { name: "Nutrition", value: 30 },
  { name: "Sleep", value: 30 },
];

const COLORS = ["#ef4444", "#22c55e", "#3b82f6"];

const FitnessDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E1E1E] p-5 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl">
        <div>
          <h2 className="text-2xl font-bold mb-10">FitnessPro</h2>
          <nav className="space-y-6">
            <button className="flex items-center gap-4 text-lg hover:text-red-500">
              <Home size={20} /> Dashboard
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-red-500">
              <Dumbbell size={20} /> Workouts
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-red-500">
              <LineChart size={20} /> Progress
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-red-500">
              <Users size={20} /> Community
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-red-500">
              <Settings size={20} /> Settings
            </button>
          </nav>
        </div>
        <Button variant="ghost" className="flex items-center gap-3 text-white">
          <Moon /> Dark Mode
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1E1E1E]">
            <CardContent className="p-5">
              <p className="text-gray-400">Calories Burned</p>
              <h2 className="text-2xl font-bold">12,500</h2>
              <p className="text-green-400">+1.2% this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E]">
            <CardContent className="p-5">
              <p className="text-gray-400">Total Workouts</p>
              <h2 className="text-2xl font-bold">34</h2>
              <p className="text-green-400">+3 this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E]">
            <CardContent className="p-5">
              <p className="text-gray-400">Active Days</p>
              <h2 className="text-2xl font-bold">21</h2>
              <p className="text-red-400">-1 this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E]">
            <CardContent className="p-5">
              <p className="text-gray-400">Avg Sleep</p>
              <h2 className="text-2xl font-bold">7.3 hrs</h2>
              <p className="text-green-400">+0.5 hrs</p>
            </CardContent>
          </Card>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Calories Over Time</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataBar} barCategoryGap={20}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="calories" fill="#ef4444" radius={[5, 5, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 xl:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span>🏃‍♂️ Morning Run</span>
                <span className="text-gray-400">30 mins</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>💪 Chest Day</span>
                <span className="text-gray-400">45 mins</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>🥗 Healthy Meal</span>
                <span className="text-gray-400">600 kcal</span>
              </li>
            </ul>
          </div>

          {/* Pie Chart */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Activity Breakdown</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" outerRadius={80} label>
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FitnessDashboard;