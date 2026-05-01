"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      // Calls /api/signup on the backend
      const response = await api.post("/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Assuming the backend sends a successful response
      router.push("/verify");
    } catch (err) {
      setError(err.message || "Failed to sign up");
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
          <h1 className="text-4xl font-extrabold text-[#111827] mb-2">Create an Account</h1>
        </div>

        <form className="space-y-5 mb-10" onSubmit={handleSubmit}>
          {error && <div className="p-3 bg-red-100 text-red-600 rounded-xl text-center text-sm font-medium">{error}</div>}
          
          <Input 
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleChange}
            required
            icon={<User className="w-6 h-6 text-green-500" />} 
          />
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
          <Input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            icon={<Lock className="w-6 h-6 text-green-500" />} 
          />

          <div className="pt-6">
            <Button type="submit" disabled={isLoading} className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white">
              {isLoading ? "Signing Up..." : "Sign Up"}
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
