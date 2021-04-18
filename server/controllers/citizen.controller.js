import CitizenService from "../services/citizen.service.js";

class CitizenController {
  async getAll(req, res) {
    return res.json(await CitizenService.getAll());
    // return res.json("test");
  }
}

export default new CitizenController();
