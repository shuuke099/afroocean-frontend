"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({
    visible: false,
    type: "success",
    message: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ replace with API
    if (email === "test@test.com" && password === "password123") {
      setAlert({
        visible: true,
        type: "success",
        message: "Successfully signed in!",
      });
      setTimeout(() => {
        setAlert({ ...alert, visible: false });
        router.push("/");
      }, 2000);
    } else {
      setAlert({
        visible: true,
        type: "error",
        message: "Invalid email or password",
      });
      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-accent-light text-white flex items-center justify-center rounded-full text-lg">
            🔒
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Sign In</h1>
          <p className="text-sm text-gray-500">Welcome back! Please login.</p>
        </div>

        {/* Alert */}
        {alert.visible && (
          <div
            className={`mb-4 p-3 rounded text-sm font-medium ${
              alert.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {alert.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border-2 border-accent-light rounded-lg  focus:border-accent-dark  focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password (min 8 chars)"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border-2 border-accent-light rounded-lg  focus:border-accent-dark focus:outline-none"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 bg-accent-light rounded text-primary-light focus:ring-primary"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-primary-light font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* ✅ Sign In button (Orange CTA) */}
          <button
            type="submit"
            className="w-full py-2 bg-accent text-white font-semibold rounded-lg border-2 border-accent hover:bg-accent-dark hover:border-accent-dark transition"
          >
            Sign In
          </button>

          {/* ✅ Register button (Blue secondary) */}
          <Link
            href="/register"
            className="block w-full text-center py-2 mt-2 bg-white text-primary font-semibold rounded-lg border-2 border-primary-light hover:bg-primary hover:text-white transition"
          >
            Register
          </Link>
        </form>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} AfroOcean. All rights reserved.
      </p>
    </div>
  );
}
