import type { Link } from '@repo/api';

const API_URL = process.env.API_URL || 'http://localhost:3000';

// export const dynamic = 'force-dynamic';

export async function getLinks(): Promise<Link[]> {
  try {
    const res = await fetch(`${API_URL}/links`, {
      // cache: 'no-store',
      // next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch links');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}