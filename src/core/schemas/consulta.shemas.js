const mongoose = require("mongoose");

const consultaSchema = new mongoose.Schema({
    cant_productos: Number,
    productos: [{
        title: String,
        link: String,
        img: String,
        full: String,
    }, ],
    created: {
        type: Date,
        default: Date.now,
    },
});

const Consulta = mongoose.model("Consulta", consultaSchema);

module.exports = Consulta;