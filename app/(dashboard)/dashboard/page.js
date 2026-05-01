import Link from "next/link";
import { User, Flame, Trophy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-foreground pb-20">
      {/* Header Area */}
      <div className="bg-navy-dark text-white pt-12 pb-16 px-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-bold">Hello, Alex! 👋</h1>
            <p className="text-gray-300">Ready to unlock your IQ?</p>
          </div>
          <Link href="/badges">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center relative">
              <User className="w-6 h-6 text-white" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-navy-dark" />
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-4 max-w-md mx-auto">
          <Link href="/streak-update" className="flex-1 bg-white/10 rounded-2xl p-4 flex items-center hover:bg-white/20 transition-colors">
            <div className="bg-orange-500/20 p-2 rounded-xl mr-3">
              <Flame className="w-6 h-6 text-orange-400 fill-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-gray-300">Day Streak</p>
            </div>
          </Link>
          <Link href="/badges" className="flex-1 bg-white/10 rounded-2xl p-4 flex items-center hover:bg-white/20 transition-colors">
            <div className="bg-yellow-500/20 p-2 rounded-xl mr-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-gray-300">Badges</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full px-6 -mt-8">
        {/* Today's Task Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">
                DAILY TASK
              </span>
              <h2 className="text-2xl font-extrabold text-[#111827]">Data Cleaning</h2>
              <p className="text-gray-500 text-sm mt-1">Clean & Analyze the Dataset</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
               <span className="font-bold text-green-700">CSV</span>
            </div>
          </div>
          
          <div className="w-full mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Progress</span>
              <span className="text-sm font-bold text-[#B500B5]">0%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#B500B5] w-[0%] rounded-full" />
            </div>
          </div>

          <Link href="/task-details">
            <Button className="w-full text-lg h-12 bg-[#B500B5] hover:bg-[#9B009B] text-white flex items-center gap-2">
              <Play className="w-5 h-5 fill-white" /> Resume Learning
            </Button>
          </Link>
        </div>

        {/* Categories / Skills preview */}
        <h3 className="text-xl font-bold text-[#111827] mb-4">Your Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-xl mb-3" />
            <h4 className="font-bold text-sm text-[#111827]">Frontend Dev</h4>
            <p className="text-xs text-gray-500 mt-1">Level 4</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-xl mb-3" />
            <h4 className="font-bold text-sm text-[#111827]">Backend Dev</h4>
            <p className="text-xs text-gray-500 mt-1">Level 2</p>
          </div>
        </div>
      </div>
    </main>
  );
}
