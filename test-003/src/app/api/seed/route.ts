import { NextResponse } from 'next/server';
import { connect, disconnect } from '../../../../database/db';
import { Entry } from '../../../../models';
import { seedData } from '../../../../database/seed-data';

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connect();
  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);
  await disconnect();

  return NextResponse.json({ message: 'Connected to mongo db' });
}
