import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyPage() {
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

      <div className="flex-1 flex flex-col items-center max-w-md mx-auto w-full">
        {/* Logo Area */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#B500B5] flex items-center justify-center gap-2">
            <span className="text-blue-500">💡</span> Scholaris<span className="text-[#00C4CC]">IQ</span>
          </h1>
          <p className="text-yellow-500 font-bold tracking-widest text-sm mt-1 uppercase">Unlock Your IQ</p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Check Your Email</h2>
          <p className="text-gray-900 text-lg">We&apos;ve sent a default password to your</p>
          <p className="text-blue-500 text-lg">yourname@gmail.com</p>
        </div>

        <form className="w-full space-y-6 mb-12" action="/skills">
          <Input 
            type="text" 
            placeholder="Enter verification code" 
            className="text-center text-xl tracking-widest h-16 rounded-2xl"
          />

          <Button type="submit" className="w-full h-14 text-xl bg-[#B500B5] hover:bg-[#9B009B] text-white rounded-2xl">
            Verify
          </Button>
        </form>

        <div className="text-center mt-auto pb-10">
          <p className="text-[#111827] font-bold text-lg">
            Didn&apos;t receive code?{" "}
            <button type="button" className="text-[#B500B5]">
              Resend Code
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
