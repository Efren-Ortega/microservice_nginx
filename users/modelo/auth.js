const conn = require('./conexion')

const callback = (err, rows, resolve, reject, msg) => {
  if (err) { console.log(err); return reject(err) };
  if (msg) console.log(msg)
  return resolve(rows);
}

module.exports = {
  methods: {
    auth: {

    }
  }
}