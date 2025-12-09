import { ExamplesNavigation } from '@/components/zustand';

export default function ZustandExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar Navigation - Hidden on mobile, visible on desktop */}
        <aside className="hidden lg:block w-64 fixed h-full">
          <ExamplesNavigation />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
