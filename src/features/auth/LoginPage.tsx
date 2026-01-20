import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(email, password);
    navigate("/dashboard");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='w-full max-w-md'>
        {/* Logo + Brand */}
        <div className='flex flex-col items-center mb-6'>
          <img
            src='/assets/logo.svg'
            alt='AtlasLogix'
            className='h-10 mb-3'
          />
          <h1 className='text-2xl font-semibold text-gray-900'>
            Sign in to AtlasLogix
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            Compliance & Shipment Monitoring
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4'>
          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='auditor@atlaslogix.test'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='••••••••'
            />
          </div>

          {/* Error */}
          {error && (
            <div className='rounded-lg bg-red-50 border border-red-200 p-2 text-sm text-red-600'>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type='submit'
            disabled={loading}
            className='w-full flex justify-center items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition disabled:opacity-50'>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className='text-xs text-center text-gray-400 mt-6'>
          © 2026 AtlasLogix. All rights reserved.
        </p>
      </div>
    </div>
  );
}
