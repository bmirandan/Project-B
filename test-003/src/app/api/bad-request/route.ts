import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request.nextUrl);
  return NextResponse.json(
    { message: request.nextUrl.searchParams.get('message') ?? 'Bad request' },
    { status: 400 }
  );
}
