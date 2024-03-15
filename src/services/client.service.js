const clientModel = require("../models/client.model");
const ClientModel = require("../models/client.model");

class ClientService {
  ClientService() {}

  async index() {
    try {
      return await ClientModel.find();
    } catch (error) {
      console.error("Cannot index clients : ", error);
    }
  }

  async save(client = new ClientModel()) {
    var client;

    try {
      await clientModel.create(client).then((resp) => {
        client = resp;
      });
      return client;
    } catch (error) {
      console.error("Cannot save client ", error);
    }
  }

  async delete(id) {
    var client;

    try {
      await clientModel
        .findOneAndDelete({
          _id: id,
        })
        .then((resp) => {
          client = resp;
        });

      return client;
    } catch (error) {
      console.error("Cannot delete client ", error);
    }
  }

  async update(id, clientReq) {
    var client;
    try {
      await clientModel
        .findOneAndUpdate(
          {
            _id: id,
          },
          clientReq
        )
        .then((resp) => {
          client = resp;
        });

      return client;
    } catch (error) {
      console.error("Cannot update client ", error);
    }
  }
}

module.exports = new ClientService();
