// app/dashboard/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Profile', href: '/dashboard/profile' },
    { name: 'Agent', href: '/dashboard/agent' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <aside className="w-64 p-4 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-cyan-800 transition',
                pathname === item.href && 'bg-cyan-400 text-white dark:bg-cyan-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
