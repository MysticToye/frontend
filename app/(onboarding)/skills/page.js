"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SKILLS = [
  "Frontend Development",
  "Backend Development",
  "Data Analysis",
  "UI/UX Design",
  "Project Management",
];

export default function PickSkillsPage() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-white text-foreground relative px-6 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/signup">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-8 h-8 text-[#B500B5]" />
          </button>
        </Link>
      </div>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#111827] mb-2">Pick Your Skills</h1>
          <p className="text-gray-600">You can add more later</p>
        </div>

        <div className="space-y-4 mb-24">
          {SKILLS.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={cn(
                  "w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all",
                  isSelected
                    ? "border-[#B500B5] bg-[#B500B5]/5"
                    : "border-[#B500B5] bg-white hover:bg-gray-50"
                )}
              >
                <span className="text-lg font-semibold text-gray-900 w-full text-left max-w-[200px] leading-tight">
                  {skill}
                </span>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex-shrink-0 transition-colors",
                    isSelected
                      ? "border-[#B500B5] bg-[#B500B5]"
                      : "border-gray-200 bg-gray-200"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom Sticky Action */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 flex justify-center pb-8">
          <div className="max-w-md w-full">
            <Link href="/dashboard">
              <Button 
                className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white"
                disabled={selectedSkills.length === 0}
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
