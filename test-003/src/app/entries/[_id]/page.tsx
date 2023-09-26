import axios from 'axios';
import NewEntry from './NewEntry.component';
import { IEntry } from '../../../../interfaces';
import mongoose from 'mongoose';
import EntryModel from '../../../../models/Entry';
import { connect, disconnect } from '../../../../database/db';

type EntryPageT = {
  params: {
    _id: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  connect();
  const entries = await EntryModel.find();
  disconnect();
  return entries;
}

export async function getEntry({ params: { _id } }: EntryPageT) {
  connect();
  const data = await EntryModel.findOne({ _id }).lean();
  disconnect();
  return JSON.parse(JSON.stringify(data));
}

export default async function HomePage({ params: { _id } }: EntryPageT) {
  const entry = await getEntry({ params: { _id } });

  return <NewEntry originalEntry={entry as IEntry} />;
}
