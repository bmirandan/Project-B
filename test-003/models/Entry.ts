import mongoose, { Model, Schema } from 'mongoose';

import { IEntry } from '../interfaces';

const EntrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number, default: Date.now },
  status: {
    type: String,
    enum: {
      values: ['pending', 'inProgress', 'finished'],
      message: '{VALUE} is not supported',
    },
    default: 'pending',
  },
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', EntrySchema);

export default EntryModel;
