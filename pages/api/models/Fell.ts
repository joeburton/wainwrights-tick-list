import { Schema, Model, model, models } from 'mongoose';

export interface FellInterface {
  id?: string;
  name: string;
  region: string;
  metres: string;
  feet: boolean;
  latitude: string;
  longitude: string;
  climbed: boolean;
  notes: string;
  date: Date;
}

const FellSchema = new Schema<FellInterface>(
  {
    name: String,
    region: String,
    metres: String,
    feet: String,
    latitude: String,
    longitude: String,
    climbed: Boolean,
    notes: String,
    date: Date,
  },
  { timestamps: true }
);

export const Fell = (
  models.Fell ? models.Fell : model('Fell', FellSchema)
) as Model<FellInterface>;
