const conn = require('./conexion')

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg)

  return resolve(rows);
}

module.exports = {
  methods: {
    createUser: (data) => {



      return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO usuarios(id, nombres, apellidos, usuario, contrasena) 
        VALUES (default, '${data.nombres}', '${data.apellidos}', '${data.usuario}', '${data.contrasena}')`, (err, row) => {
          callback(err, row, resolve, reject)
        })
      })



    }
  }
}