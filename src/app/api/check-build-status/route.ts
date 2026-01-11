import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(process.env.CHECK_API_URL!,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache:"no-store"
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
  }
}