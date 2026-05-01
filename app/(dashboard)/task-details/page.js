import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaskDetailsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-navy text-white relative">
      {/* Header */}
      <div className="flex items-center p-6 border-b border-white/10">
        <Link href="/dashboard" className="absolute left-6">
          <ChevronLeft className="w-8 h-8 text-[#B500B5]" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold">Task Details</h1>
      </div>

      <div className="flex-1 flex flex-col px-6 py-10 max-w-md mx-auto w-full">
        <h2 className="text-3xl font-extrabold text-center mb-6 leading-tight">
          Clean & Analyze the Dataset
        </h2>
        
        <p className="text-xl text-center mb-12 text-gray-200 px-4">
          Follow the steps and create meaningful insights
        </p>

        <div className="bg-navy-dark/50 rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">Your Tasks:</h3>
          <ul className="space-y-3 text-lg text-gray-200">
            <li>1. Clean the dataset</li>
            <li>2. Handle missing values</li>
            <li>3. Perform EDA</li>
            <li>4. Generate insights</li>
            <li>5. Create visualization</li>
          </ul>
        </div>

        {/* Bottom Button */}
        <div className="mt-auto pt-8">
          <Link href="/daily-task">
            <Button className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white">
              Open Dataset
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
