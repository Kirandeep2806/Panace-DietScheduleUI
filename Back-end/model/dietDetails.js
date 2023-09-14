const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
    email : {type: String},
    date : {type: String},
    rows: {type: Object},
});

module.exports = mongoose.model("dietDeatils", dietSchema);