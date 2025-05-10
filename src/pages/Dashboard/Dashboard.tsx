import { Card, CardContent } from "../../component/ui/cards/card";
import { Button } from "../../component/ui/button/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Home, Dumbbell, LineChart, Users, Settings, Moon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#000000] to-[#121212] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E1E1E] p-5 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl border-r border-[#FF0000]/20">
        <div>
          <h2 className="text-2xl font-bold mb-10 text-[#FF0000]" data-aos="fade-right">FitnessPro</h2>
          <nav className="space-y-6">
            <button className="flex items-center gap-4 text-lg hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-right" data-aos-delay="100">
              <Home size={20} /> Dashboard
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-right" data-aos-delay="200">
              <Dumbbell size={20} /> Workouts
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-right" data-aos-delay="300">
              <LineChart size={20} /> Progress
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-right" data-aos-delay="400">
              <Users size={20} /> Community
            </button>
            <button className="flex items-center gap-4 text-lg hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-right" data-aos-delay="500">
              <Settings size={20} /> Settings
            </button>
          </nav>
        </div>
        <Button variant="ghost" className="flex items-center gap-3 text-white hover:text-[#FF0000] transition-colors duration-300" data-aos="fade-up">
          <Moon /> Dark Mode
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-[#FF0000]" data-aos="fade-down">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
            <CardContent className="p-5">
              <p className="text-gray-400">Calories Burned</p>
              <h2 className="text-2xl font-bold text-[#FF0000]">12,500</h2>
              <p className="text-green-400">+1.2% this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
            <CardContent className="p-5">
              <p className="text-gray-400">Total Workouts</p>
              <h2 className="text-2xl font-bold text-[#FF0000]">34</h2>
              <p className="text-green-400">+3 this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
            <CardContent className="p-5">
              <p className="text-gray-400">Active Days</p>
              <h2 className="text-2xl font-bold text-[#FF0000]">21</h2>
              <p className="text-red-400">-1 this week</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
            <CardContent className="p-5">
              <p className="text-gray-400">Avg Sleep</p>
              <h2 className="text-2xl font-bold text-[#FF0000]">7.3 hrs</h2>
              <p className="text-green-400">+0.5 hrs</p>
            </CardContent>
          </Card>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-lg font-semibold mb-4 text-[#FF0000]">Calories Over Time</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataBar} barCategoryGap={20}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="calories" fill="#FF0000" radius={[5, 5, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 xl:col-span-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-lg font-semibold mb-4 text-[#FF0000]">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                <span>🏃‍♂️ Morning Run</span>
                <span className="text-gray-400">30 mins</span>
              </li>
              <li className="flex justify-between text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                <span>💪 Chest Day</span>
                <span className="text-gray-400">45 mins</span>
              </li>
              <li className="flex justify-between text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                <span>🥗 Healthy Meal</span>
                <span className="text-gray-400">600 kcal</span>
              </li>
            </ul>
          </div>

          {/* Pie Chart */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-lg font-semibold mb-4 text-[#FF0000]">Activity Breakdown</h2>
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