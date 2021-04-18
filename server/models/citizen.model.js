import mongoose from "mongoose";
const Schema = mongoose.Schema;

const citizenSchema = new Schema(
  {
    name: String,
    city_id: Number,
    groups: [{ type: { type: String }, name: String }],
  },
  { versionKey: false }
);


const CitizenModel = mongoose.model("Citizen", citizenSchema);

export default CitizenModel
