const mongoose = require("mongoose");
const Detailschema = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,

    links: [
{
        label: String,
        url: String,
}
],
});
module.exports = mongoose.model("detail", Detailschema)