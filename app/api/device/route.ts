import { fetchHumidity } from "@/app/services/mysql";

export async function GET(req: Request) {
  const data = await fetchHumidity();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}