import Link from "next/link";
import { User, Mail, Lock, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-foreground relative px-6 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-8 h-8 text-[#B500B5]" />
          </button>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#111827] mb-2">Create an Account</h1>
        </div>

        <form className="space-y-5 mb-10" action="/verify">
          <Input 
            type="text" 
            placeholder="Full Name" 
            icon={<User className="w-6 h-6 text-green-500" />} 
          />
          <Input 
            type="email" 
            placeholder="Email" 
            icon={<Mail className="w-6 h-6 text-green-500" />} 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            icon={<Lock className="w-6 h-6 text-green-500" />} 
          />
          <Input 
            type="password" 
            placeholder="Confirm Password" 
            icon={<Lock className="w-6 h-6 text-green-500" />} 
          />

          <div className="pt-6">
            <Button type="submit" className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white">
              Sign Up
            </Button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-gray-900 font-bold text-lg">
            Already have an account?{" "}
            <Link href="/login" className="text-[#B500B5]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
