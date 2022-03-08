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

module.exports = consDAO;