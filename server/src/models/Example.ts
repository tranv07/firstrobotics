import mongoose, { Document, Schema } from 'mongoose';

export interface IExample extends Document {
  name: string;
  description?: string;
  email: string;
  age?: number;
  tags?: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const exampleSchema = new Schema<IExample>(
  {
    name: { type: String, required: true, maxlength: 100 },
    description: { type: String },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0, max: 150 },
    tags: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Example = mongoose.model<IExample>('Example', exampleSchema);