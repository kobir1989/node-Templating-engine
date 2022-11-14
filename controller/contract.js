const Contract = require("../model/Contract");

module.exports.createContracts = async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    const contract = new Contract({
      firstname,
      lastname,
      email,
      phone,
    });
    await contract.save();
    res.status(200).send("Ok");
  } catch (error) {
    res.status(401).send("failed");
    console.log(error);
  }
};

module.exports.getContracts = async (_, res) => {
  try {
    const contract = await Contract.find();
    res.status(200).send(contract);
  } catch (error) {
    res.status(401).send("No contract found!");
    console.log(error);
  }
};

module.exports.getSingleContract = async (req, res) => {
  try {
    const { id } = req.params;
    const singleContract = await Contract.findById(id);
    res.status(200).send(singleContract);
  } catch (error) {
    res.status(401).send("Contract does not exist");
  }
};

module.exports.updateContracts = async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    const { id } = req.params;
    const updatedContract = await Contract.findOneAndUpdate({ _id: id }, { $set: { firstname, lastname, email, phone } }, { new: true });
    await res.status(200).send(updatedContract);
  } catch (error) {
    res.status(401).send("update failed");
    console.log(error);
  }
};

module.exports.deleteContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContract = await Contract.findOneAndDelete({ _id: id });
    await res.status(200).send(deletedContract);
  } catch (error) {
    res.status(401).send("Delete failed");
    console.log(error);
  }
};
