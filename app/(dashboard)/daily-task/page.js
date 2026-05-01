import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DailyTaskPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#E5E7EB] flex items-center p-4 shadow-sm relative">
        <Link href="/task-details" className="absolute left-4">
          <ChevronLeft className="w-8 h-8 text-[#B500B5]" />
        </Link>
        <h1 className="flex-1 text-center text-2xl font-bold text-[#111827]">Daily Task</h1>
      </div>
      <div className="h-2 w-full bg-navy-dark" />

      {/* Top Section */}
      <div className="flex-1 px-6 py-8 max-w-md mx-auto w-full text-center flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-navy-dark mb-6">API Creation Task</h2>
        
        <div className="flex items-center justify-between w-full mb-12">
          <p className="text-xl text-navy-dark font-medium max-w-[200px] text-left">
            Build a REST API using Node.js
          </p>
          {/* Mock Node.js Icon */}
          <div className="w-20 h-20 bg-[#333333] rounded-2xl flex items-center justify-center border-4 border-[#333333] shadow-lg">
            <span className="text-4xl font-bold text-green-500">JS</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-semibold text-navy-dark">Progress</span>
            <span className="text-xl font-medium text-navy-dark">50%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-1/2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="bg-navy flex-1 w-full rounded-t-3xl pt-6 px-4 pb-8 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 px-2">Code Preview</h3>
        
        {/* Mock Code Block */}
        <div className="bg-[#1E1E1E] rounded-xl p-4 flex-1 font-mono text-sm overflow-hidden border-t-8 border-[#333] shadow-inner mb-6">
          <div className="flex space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-gray-300 overflow-x-auto">
<code className="text-teal-400">module</code>.exports = leftpad;<br/>
<code className="text-teal-400">function</code> <code className="text-green-400">leftpad</code>(str, len, ch) &#123;<br/>
&nbsp;&nbsp;str = <code className="text-blue-400">String</code>(str);<br/>
&nbsp;&nbsp;<code className="text-teal-400">var</code> i = -1;<br/>
&nbsp;&nbsp;<code className="text-pink-500">if</code> (!ch && ch !== 0) ch = ' ';<br/>
&nbsp;&nbsp;len = len - str.length;<br/>
&nbsp;&nbsp;<code className="text-pink-500">while</code> (++i &lt; len) &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;str = ch + str;<br/>
&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;<code className="text-pink-500">return</code> str;<br/>
&#125;
          </pre>
        </div>

        <Link href="/task-complete">
          <Button className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white">
            Start Task
          </Button>
        </Link>
      </div>
    </main>
  );
}
