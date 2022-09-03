const express = require('express');
const router = express.Router();
const bdc = require('../config/connection')

router.get('/inicio', (req,res) => {
    res.send("Soy un inicio enrutado...");
})
router.get('/conectar', (req,res) => {
    bdc.mongoose;
})



module.exports = router;