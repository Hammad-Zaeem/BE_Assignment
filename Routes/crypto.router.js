const express = require('express');
const router = express.Router();
const {getCryptoPriceDeviation,getCryptoStats} = require('../Controllers/crypto.controller');

// Route to fetch latest cryptocurrency stats (/stats?coin=bitcoin)
router.get('/stats', getCryptoStats);

// Route to fetch standard deviation of cryptocurrency prices (/deviation?coin=bitcoin)
router.get('/deviation', getCryptoPriceDeviation);

module.exports = router;
