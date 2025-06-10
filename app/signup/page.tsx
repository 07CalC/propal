'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignupPage() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(''); // Clear any existing errors
      const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Signup successful!');
        redirect("/dashboard")
      } else {
        setError(data.error || 'Signup failed');
        toast.error(data.error || 'Signup failed');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      toast.error('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {['username', 'email', 'password', 'phone'].map((field) => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            required={field !== 'phone'}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
