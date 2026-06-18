import Link from "next/link";
import { LoginForm } from "@/src/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border bg-white shadow-lg md:grid-cols-2">
        <div className="hidden bg-black p-12 text-white md:flex md:flex-col md:justify-center">
          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-4 text-gray-300">
            Sign in to continue shopping
            and manage your orders.
          </p>
        </div>

        <div className="p-10">
          <h2 className="mb-2 text-3xl font-bold">
            Login
          </h2>

          <p className="mb-8 text-gray-500">
            Enter your account details
          </p>

          <LoginForm />

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}