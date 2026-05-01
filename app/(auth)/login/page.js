"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setIsLoading(true);
      // Calls /api/login on the backend
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      // Assuming backend sends a token
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

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
          <h1 className="text-4xl font-extrabold text-[#111827] mb-2">Welcome Back!</h1>
          <p className="text-gray-600 text-lg">Login to your account</p>
        </div>

        <form className="space-y-5 mb-8" onSubmit={handleSubmit}>
          {error && <div className="p-3 bg-red-100 text-red-600 rounded-xl text-center text-sm font-medium">{error}</div>}
          
          <Input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
            icon={<Mail className="w-6 h-6 text-green-500" />} 
          />
          <Input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required
            icon={<Lock className="w-6 h-6 text-green-500" />} 
          />

          <div className="flex items-center space-x-3 pt-2">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-5 h-5 rounded border-gray-300 text-[#B500B5] focus:ring-[#B500B5]"
            />
            <label htmlFor="remember" className="text-gray-900 font-medium text-lg">
              Remember my email address
            </label>
          </div>

          <div className="pt-6">
            <Button type="submit" disabled={isLoading} className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white">
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="text-center space-y-8">
          <Link href="/forgot-password" className="text-[#B500B5] font-bold text-lg inline-block">
            Forgot Password?
          </Link>

          <p className="text-gray-900 font-bold text-lg">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#B500B5]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
