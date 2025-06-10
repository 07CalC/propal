'use client';

import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const { user, refresh, loading } = useAuth();
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        email: user.email || '',
        phone: user.phone || '',
        password: '',
      });
    }
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Profile updated successfully!');
        refresh(); // update context
        setForm((prev) => ({ ...prev, password: '' }));
      } else {
        toast.error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Profile Settings</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Account Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
            <p className="font-medium">{user.username}</p>
          </div>
          
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              New Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Leave blank to keep current password"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
