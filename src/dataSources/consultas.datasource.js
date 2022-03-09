require("./connection"); // importa el archivo de conexión
const ConsModel = require("../core/schemas/consulta.shemas");

let consDAO = {};

consDAO.saveConsul = async(lista, callback) => {
    const newCons = new ConsModel({
        cant_productos: Object.keys(lista).length,
        productos: lista,
    });
    console.log(newCons);
    newCons.save((err, save) => {
        if (err) throw err;
        else if (save) {
            callback(null, save);
        }
    });
};

consDAO.getConsultas = async(callback) => {
    ConsModel.find({}, { cant_productos: 1, created: 1 }, (err, consulta) => {
        if (err) throw err;
        else {
            console.log(consulta);
            callback(null, consulta);
        }
    });
};

consDAO.getItems = async(id, callback) => {
    console.log(id);
    ConsModel.findById(id, (err, items) => {
        if (err) throw err;
        else {
            callback(null, items);
        }
    });
};

module.exports = consDAO;