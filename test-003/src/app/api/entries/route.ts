import { NextResponse } from 'next/server';
import { connect, disconnect } from '../../../../database/db';
import { Entry } from '../../../../models';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await connect();
  const entries = await Entry.find().sort({ createdAt: 'ascending' });
  await disconnect();

  return NextResponse.json(entries);
}

export async function POST(request: Request) {
  const { description } = await request.json();

  const newEntry = new Entry({ description, createdAt: Date.now() });

  try {
    await connect();
    await newEntry.save();
    await disconnect();
  } catch (error: any) {
    await disconnect();
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }

  return NextResponse.json(newEntry);
}

export async function PUT(request: Request) {
  const { _id, status, description } = await request.json();

  if (!mongoose.isValidObjectId(_id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  try {
    await connect();
    const updatedEntry = await Entry.findByIdAndUpdate(
      _id,
      { description, status },
      {
        runValidators: true,
        new: true,
      }
    );
    await disconnect();
    return NextResponse.json(updatedEntry, { status: 200 });
  } catch (error: any) {
    await disconnect();
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
