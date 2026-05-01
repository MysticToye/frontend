import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function SplashPage() {
  return (
    <main className="flex min-h-screen flex-col bg-navy-dark text-white relative">
      {/* Top Navigation */}
      <div className="absolute top-6 left-4 z-10">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft className="w-8 h-8 text-primary" />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 px-6 pt-24 pb-8 max-w-md mx-auto w-full relative z-10">
        <h1 className="text-3xl font-bold text-center mb-6">WHY SCHOLARISIQ?</h1>

        <ul className="space-y-2 text-lg mb-8 mx-auto">
          <li>1. Build daily learning habits</li>
          <li>2. Stay consistent with streaks</li>
          <li>3. Master tech skills step by step</li>
          <li>4. Track progress and see growth</li>
          <li>5. Stay motivated with rewards</li>
        </ul>

        {/* 3D Illustration Area */}
        <div className="relative flex-1 w-full min-h-[300px] my-6 rounded-2xl overflow-hidden shadow-2xl">
           <Image
             src="/splash_character.png"
             alt="3D tech student learning"
             fill
             className="object-cover object-top"
             priority
           />
           {/* Dark gradient overlay at the bottom of the image to blend into the background */}
           <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-auto space-y-4">
          <p className="text-lg">Small daily steps. Big career growth.</p>
          <p className="text-xl font-semibold text-yellow-500 mb-6">Start your journey today!</p>
          
          <Link href="/login" className="block w-full">
            <Button className="w-full text-xl h-14 bg-[#B500B5] hover:bg-[#9B009B] text-white">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
