import { useState } from "react";

const Calories = () => {
    const [age, setAge] = useState(25);
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(180);
    const [weight, setWeight] = useState(65);
    const [activity, setActivity] = useState(1.55);
    const [result, setResult] = useState<number | null>(null);

    const calculateCalories = () => {
        const bmr =
            gender === "male"
                ? 10 * weight + 6.25 * height - 5 * age + 5
                : 10 * weight + 6.25 * height - 5 * age - 161;

        const calories = bmr * activity;
        setResult(calories);
    };

    const clearFields = () => {
        setAge(25);
        setGender("male");
        setHeight(180);
        setWeight(65);
        setActivity(1.55);
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white flex justify-center items-center px-4">
            <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-red-700">
                {/* Title + Description */}
                <h1 className="text-2xl font-bold mb-2 text-center">Calorie Calculator</h1>
                <p className="text-sm text-gray-300 mb-6 text-center">
                    The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.
                </p>

                <label className="block mb-2">Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                />

                <label className="block mb-2">Gender</label>
                <div className="flex items-center gap-6 mb-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="male"
                            checked={gender === "male"}
                            onChange={() => setGender("male")}
                            className="accent-red-600"
                        />
                        Male
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="female"
                            checked={gender === "female"}
                            onChange={() => setGender("female")}
                            className="accent-red-600"
                        />
                        Female
                    </label>
                </div>

                <label className="block mb-2">Height (cm)</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                />

                <label className="block mb-2">Weight (kg)</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                />

                <label className="block mb-2">Activity Level</label>
                <select
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full p-2 pr-10 rounded bg-black text-white border border-gray-600 mb-6"
                >
                    <option value={1.2}>Sedentary (little or no exercise)</option>
                    <option value={1.375}>Light (exercise 1–3 days/week)</option>
                    <option value={1.55}>Moderate (exercise 4–5 days/week)</option>
                    <option value={1.725}>Active (daily exercise or intense sessions)</option>
                    <option value={1.9}>Very Active (physical job or 2x/day training)</option>
                </select>

                <div className="flex justify-between">
                    <button
                        onClick={calculateCalories}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    >
                        Calculate
                    </button>
                    <button
                        onClick={clearFields}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
                    >
                        Clear
                    </button>
                </div>

                {result !== null && (
                    <div className="mt-6 text-center text-lg">
                        Estimated Daily Calories:{" "}
                        <span className="font-semibold text-green-400">{Math.round(result)} kcal</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calories;
