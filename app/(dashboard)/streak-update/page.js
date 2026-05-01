import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StreakUpdatePage() {
  const days = [
    { day: "M", date: 12 },
    { day: "T", date: 13 },
    { day: "W", date: 14 },
    { day: "T", date: 15, active: true },
    { day: "F", date: 16, active: true },
    { day: "S", date: 17 },
    { day: "S", date: 18 },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-navy-dark text-white px-6 py-12 justify-center items-center">
      
      {/* Flame Icon */}
      <div className="mb-6 mt-8">
        <Flame className="w-32 h-32 text-orange-500 fill-orange-500 animate-pulse" />
      </div>

      {/* Streak Text */}
      <div className="text-center mb-10">
        <h1 className="text-8xl font-black mb-2">8</h1>
        <p className="text-2xl font-bold">Days</p>
      </div>

      <div className="text-center mb-12">
        <p className="text-xl">Amazing! Your streak</p>
        <p className="text-xl">is getting stronger!</p>
      </div>

      {/* Calendar View */}
      <div className="bg-[#E5E7EB] w-full max-w-md rounded-xl p-6 mb-16 flex justify-between items-center text-[#111827]">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <span className="text-lg font-medium">{d.day}</span>
            <span className={cn(
              "text-xl font-bold",
              d.active ? "text-blue-500" : ""
            )}>
              {d.date}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md mt-auto">
        <Link href="/badges">
          <Button className="w-full h-14 text-xl bg-[#E5E7EB] hover:bg-gray-300 text-[#B500B5]">
            View Progress
          </Button>
        </Link>
      </div>
    </main>
  );
}
