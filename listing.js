const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
    type: String,
    required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https:unsplash.com/photos/an-empty-road-in-the-middle-of-nowhere-lKepw6_yvVQ",
        set: (v) => v === "" ? "https:unsplash.com/photos/an-empty-road-in-the-middle-of-nowhere-lKepw6_yvVQ" : v,
    },
    price: Number,
    location: String,
    country: String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
