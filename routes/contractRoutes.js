const express = require("express");
const router = express();
const { createContracts, getContracts, updateContracts, deleteContracts, getSingleContract } = require("../controller/contract");

router.get("/", getContracts);
router.get("/:id", getSingleContract);
router.get("/delete/:id", deleteContracts);
router.post("/:id", updateContracts);
router.post("/", createContracts);

// router.delete("/:id", deleteContracts);

module.exports = router;
