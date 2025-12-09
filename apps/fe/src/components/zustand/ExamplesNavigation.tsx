'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    href: '/zustand-examples/counter',
    label: 'Counter Store',
    description: 'Basic with persist',
  },
  {
    href: '/zustand-examples/user',
    label: 'User Store',
    description: 'Auth state management',
  },
  {
    href: '/zustand-examples/todo',
    label: 'Todo Store',
    description: 'Immer middleware',
  },
];

export function ExamplesNavigation() {
  const pathname = usePathname();

  return (
    <nav className="h-full bg-white border-r border-gray-200 p-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Zustand Examples
        </h2>
        <p className="text-sm text-gray-600">
          Interactive state management patterns
        </p>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`
                block px-4 py-3 rounded-lg transition-all
                ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }
              `}
            >
              <div className="font-medium">{item.label}</div>
              <div
                className={`text-xs mt-0.5 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}
              >
                {item.description}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link
          href="/zustand-examples"
          className="block px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all text-center font-medium"
        >
          ← Back to Overview
        </Link>
      </div>
    </nav>
  );
}
