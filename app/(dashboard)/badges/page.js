import Link from "next/link";
import { ChevronLeft, Trophy, Sun, Coffee } from "lucide-react";

export default function BadgesPage() {
  const badges = [
    {
      id: 1,
      title: "Consistent Learner",
      description: "7-day streak",
      status: "Earned",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      earned: true,
    },
    {
      id: 2,
      title: "Task Master",
      description: "Complete 50 tasks",
      status: "Earned",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      earned: true,
    },
    {
      id: 3,
      title: "Early Bird",
      description: "Learn before 9 AM",
      status: "6/10",
      icon: <Coffee className="w-12 h-12 text-orange-400" />,
      earned: false,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-foreground px-6 py-8">
      {/* Header */}
      <div className="flex justify-center items-center mb-8 relative">
        <Link href="/dashboard" className="absolute left-0">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-8 h-8 text-[#B500B5]" />
          </button>
        </Link>
        <h1 className="text-3xl font-extrabold text-[#B500B5]">Badges</h1>
      </div>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full space-y-4">
        {badges.map((badge) => (
          <div 
            key={badge.id}
            className="flex items-center p-4 rounded-2xl border border-[#B500B5] bg-white shadow-sm"
          >
            {/* Icon Box */}
            <div className="w-20 h-20 bg-black flex items-center justify-center flex-shrink-0 mr-6">
              {badge.icon}
            </div>
            
            {/* Details */}
            <div className="flex flex-col flex-1 justify-center items-center text-center">
              <h3 className="text-xl font-bold text-[#111827]">{badge.title}</h3>
              <p className="text-sm text-[#111827] mb-2">{badge.description}</p>
              <span className="text-lg font-medium text-green-500">
                {badge.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
