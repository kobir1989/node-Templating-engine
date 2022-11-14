const Contract = require("../model/Contract");

module.exports.createContracts = async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    let error = {};
    if (!(firstname && lastname && email && phone)) {
      error.firstname = "First name required";
      error.lastname = "Last name required";
      error.email = "Invalid Email";
      error.phone = "Invalid Phone number";
    }
    const isError = Object.keys(error).length > 0;
    if (isError) {
      const contracts = await Contract.find();
      res.render("index", { contracts, error });
    } else {
      const contract = new Contract({
        firstname,
        lastname,
        email,
        phone,
      });
      await contract.save();
      res.status(200).send("Contract Added Successfully");
    }
  } catch (error) {
    res.status(401).send("Something went wrong Please try again!");
    console.log(error);
  }
};

module.exports.getContracts = async (_, res) => {
  try {
    const contracts = await Contract.find();
    await res.status(200).render("index", { contracts, error: {} });
  } catch (error) {
    res.status(401).send("No contract found!");
    console.log(error);
  }
};

module.exports.getSingleContract = async (req, res) => {
  try {
    const { id } = req.params;
    const singleContract = await Contract.findById(id);
    await res.status(200).render("index", { singleContract });
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
