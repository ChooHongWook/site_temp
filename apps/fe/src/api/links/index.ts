import type { Link } from '@repo/api';
import { api } from '@config/axios';

export async function getLinks(): Promise<Link[]> {
  try {
    const res = await api.get<Link[]>(`/links`);

    if (!res.data) {
      throw new Error('Failed to fetch links');
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}
