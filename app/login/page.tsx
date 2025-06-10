'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Login successful!');
        router.push('/dashboard');
      } else {
        setError(data.error || 'Login failed');
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
