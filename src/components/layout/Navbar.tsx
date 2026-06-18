"use client";

import Link from "next/link";
import { useAuth } from "@/src/providers/auth-provider";

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          TechMarket
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Categories
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link href="/cart" className="text-sm font-medium">
                Cart
              </Link>
              <Link href="/orders" className="text-sm font-medium">
                Orders
              </Link>
              <span>{user?.name}</span>
              <button
                onClick={logout}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
