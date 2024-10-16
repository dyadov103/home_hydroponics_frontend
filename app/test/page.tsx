"use client"
import { useEffect, useState } from 'react';

interface humidity {
  zone1: string;
  zone2: string;
  zone3: string;
}

export default function Home() {
  const [humidity, setHumidity] = useState<humidity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHumid() {
      try {
        const response = await fetch('/api/device_data');
        const data = await response.json();

        if (response.ok) {
          setHumidity(data);
        } else {
          setError(data.error || 'An error occurred while fetching users');
        }
      } catch (error) {
        setError('An error occurred while fetching users');
      }
    }

    fetchHumid();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Humidity List</h1>
      <ul>
        {humidity.map((humid) => (
          <li key={humid.zone1}>{humid.zone2} ({humid.zone3})</li>
        ))}
      </ul>
    </div>
  );
}
