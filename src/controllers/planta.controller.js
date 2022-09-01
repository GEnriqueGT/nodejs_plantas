const Planta = require("../models/planta.model");

function PlantasIniciales() {
    Planta.find( (err, plantaEncontrada) => {
      if (plantaEncontrada.length == 0) {
          Planta.create({
            mall: "Pradera Concepción",
            contents: [{
                letra: "Q",
                dato: 15
            },
            {
                letra: "pH",
                dato: 70
            },
            {
                letra: "SSLM",
                dato: 80
            }]
          },{
            mall: "Pradera Zacapa",
            contents: [{
                letra: "Q",
                dato: 30
            },
            {
                letra: "pH",
                dato: 50
            },
            {
                letra: "SSLM",
                dato: 70
            }]
          },{
            mall: "Pradera Huehuetenango",
            contents: [{
                letra: "Q",
                dato: 90
            },
            {
                letra: "pH",
                dato: 100
            },
            {
                letra: "SSLM",
                dato: 50
            }]
          });
      }
    });
  }

  function getPlantas(req, res){
    Planta.find((err, plantaEncontrada) =>{
      if (err) return res.status(404).send({ mensaje: 'Error en la peticion' });
            if (!plantaEncontrada) return res.status(500).send({ mensaje: 'Error al encontrar los hoteles' });

     
            return res.status(200).send({ plantas: plantaEncontrada });
    })
  }

  module.exports = {
    PlantasIniciales,
    getPlantas
  };