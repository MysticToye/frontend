import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Flame, Zap } from "lucide-react";

export default function TaskCompletePage() {
  return (
    <main className="flex min-h-screen flex-col bg-navy-dark text-white p-6 justify-center items-center">
      {/* Trophy Image */}
      <div className="relative w-full max-w-md aspect-video mb-10">
        <Image 
          src="/trophy_achievement.png" 
          alt="Golden Trophy" 
          fill 
          className="object-contain"
          priority
        />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Great Job!</h1>
        <p className="text-xl font-medium text-gray-300">You completed today&apos;s task</p>
      </div>

      {/* Badges/Icons */}
      <div className="flex space-x-6 mb-16">
        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center transform rotate-3 shadow-lg">
          <Zap className="w-12 h-12 text-[#B500B5]" />
        </div>
        <div className="w-20 h-20 flex items-center justify-center">
          <Flame className="w-16 h-16 text-orange-500 fill-orange-500" />
        </div>
      </div>

      <div className="w-full max-w-md mt-auto pt-8">
        <Link href="/streak-update">
          <Button className="w-full h-14 text-xl bg-white hover:bg-gray-100 text-[#B500B5]">
            Continue
          </Button>
        </Link>
      </div>
    </main>
  );
}
