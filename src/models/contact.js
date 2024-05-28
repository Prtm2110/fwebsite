const mongoose = require("mongoose");
const contactschema = mongoose.Schema({
    email: String
});


module.exports = mongoose.model("contact", contactschema);

