import CityModel from '../models/city.model.js';

class CityService {
    async getAll() {
        try {
            let docs = await CityModel.find({});
            return docs;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new CityService()