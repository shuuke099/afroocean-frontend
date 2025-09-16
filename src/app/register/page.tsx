"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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

    if (password !== passwordConfirm) {
      setAlert({
        visible: true,
        type: "error",
        message: "Passwords do not match!",
      });
      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
      return;
    }

    // ✅ Here you would normally call your API
    console.log("Registering:", { firstName, lastName, email, password });

    setAlert({
      visible: true,
      type: "success",
      message: "Account created successfully!",
    });

    setTimeout(() => {
      setAlert({ ...alert, visible: false });
      router.push("/"); // redirect to homepage
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col  items-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-2">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-accent-light text-white flex items-center justify-center rounded-full text-lg">
            🔒
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">Sign up to get started</p>
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
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-accent-light rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-accent-light rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-accent-light rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password (min 8 chars)"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-accent-light rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            minLength={8}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            className="w-full px-3 py-2 border border-accent-light rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 bg-accent-light text-white font-semibold rounded-lg hover:bg-primary transition"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="text-primary-light font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} AfroOcean. All rights reserved.
      </p>
    </div>
  );
}
