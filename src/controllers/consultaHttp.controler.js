const consDAO = require("../dataSources/consultas.datasource");

const consultaController = {};

consultaController.consultasGet = async(req, res) => {
    console.log("consulta de datos");
    // res.status(200).send({ resp: "exelente" });

    await consDAO.getConsultas((err, consulta) => {
        if (err) throw err;
        else {
            console.log("respuesta");
            console.log(consulta);
            res.status(200).send(consulta);
        }
    });
};

consultaController.itemsGet = async(req, res) => {
    let id = req.query.id;
    // console.log(req);
    // console.log(req.query.id);
    await consDAO.getItems(id, (err, items) => {
        if (err) throw err;
        else {
            res.status(200).send(items);
        }
    });
};

module.exports = consultaController;