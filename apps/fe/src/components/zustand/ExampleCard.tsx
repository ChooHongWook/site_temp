import Link from 'next/link';

interface ExampleCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  badgeColor: 'green' | 'blue' | 'purple';
}

const badgeColorClasses = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  purple: 'bg-purple-100 text-purple-800',
};

export function ExampleCard({
  title,
  description,
  features,
  href,
  badgeColor,
}: ExampleCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all"
    >
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${badgeColorClasses[badgeColor]}`}
        >
          {badgeColor === 'green' && 'Persist'}
          {badgeColor === 'blue' && 'Auth'}
          {badgeColor === 'purple' && 'Immer'}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-blue-500 font-medium text-sm flex items-center">
        View Example
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
