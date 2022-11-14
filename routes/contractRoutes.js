const express = require("express");
const router = express();
const { createContracts, getContracts, updateContracts, deleteContracts, getSingleContract } = require("../controller/contract");

router.get("/contract", getContracts);
router.get("/contract/:id", getSingleContract);
router.post("/contract", createContracts);
router.put("/contract/:id", updateContracts);
router.delete("/contract/:id", deleteContracts);

module.exports = router;
