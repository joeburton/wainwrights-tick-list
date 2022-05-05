import { Schema, Model, model, models } from 'mongoose';

interface RegionCodeInterface {
  code: string;
}

const RegionCodeSchema = new Schema<RegionCodeInterface>({
  code: String,
});

export const RegionCode = (
  models.RegionCode ? models.RegionCode : model('RegionCode', RegionCodeSchema)
) as Model<RegionCodeInterface>;
