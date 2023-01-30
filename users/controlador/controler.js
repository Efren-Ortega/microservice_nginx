const _model = require('../modelo/signUp')

module.exports = {
  createUser: (req, res) => {

    console.log(req.body)

    let data = {
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      usuario: req.body.usuario,
      contrasena: req.body.contrasena,
    };

    _model.methods.createUser(data)
      .then(result => {
        return res.send({
          status: true,
          msg: 'Registro Exitoso'
        })
      })
      .catch(err => {
        console.log(err)
        return res.send({
          status: false,
          msg: 'Error al Registrar el usuarios'
        })
      })


  }
}