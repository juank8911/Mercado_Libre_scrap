const consDAO = require("../dataSources/consultas.datasource");

const consultaController = async(req, res) => {
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

module.exports = consultaController;