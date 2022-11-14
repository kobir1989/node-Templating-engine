const express = require("express");
const router = express();
const { createContracts, getContracts, updateContracts, deleteContracts, getSingleContract } = require("../controller/contract");

router.get("/", getContracts);
router.get("/:id", getSingleContract);
router.post("/", createContracts);
router.put("/update/:id", updateContracts);
router.delete("/delete/:id", deleteContracts);

module.exports = router;
