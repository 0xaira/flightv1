const express = require('express');
const v1Routes = require('./v1'); // Ensure the path is correct

const router = express.Router();

router.use('/v1', v1Routes); // Mount v1Routes

module.exports = router;
