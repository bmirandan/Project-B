import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/api/entries/:function*',
};

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = request.nextUrl.pathname.split('/api/entries/').pop();

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');
    if (!checkMongoIDRegExp.test(id || ' ')) {
      const url = request.nextUrl.clone();
      url.pathname = '/api/bad-request';
      url.search = `?message='${id} No es valido de mongo.'`;
      return NextResponse.redirect(url); //Validate why rewrite doesn't work
    }
  }
  return NextResponse.next();
}
