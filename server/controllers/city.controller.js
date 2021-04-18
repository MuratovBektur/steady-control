import cityService from "../services/city.service.js";

class CityController {
    async getAll(req, res) {
        return res.json(await cityService.getAll());
    }
}

export default new CityController();