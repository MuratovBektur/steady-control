import mongoose from "mongoose";
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        id: Number,
        name: String,
        data: String,

    },
    { versionKey: false }
);




const CityModel = mongoose.model("City", citySchema);



export default CityModel;
