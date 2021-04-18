import citizenModel from '../models/citizen.model.js';



class CitizenService {
    async getAll() {
        try {
            let docs = await citizenModel.find({});
            return docs;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new CitizenService();