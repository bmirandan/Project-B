import { NextResponse } from 'next/server';
import { connect, disconnect } from '../../../../../database/db';
import { Entry } from '../../../../../models';
import mongoose from 'mongoose';

type EntryParamsT = {
  params: {
    _id: string;
  };
};

export async function GET(request: Request, { params: { _id } }: EntryParamsT) {
  await connect();

  if (!mongoose.isValidObjectId(_id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const entry = await Entry.findById({ _id });
  await disconnect();

  return NextResponse.json(entry);
}
