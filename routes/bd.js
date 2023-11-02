var mysql = require('mysql')

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'TP45'
})

conexion.connect(function (error) {
  if (error)
    console.log('Problemas de conexion con mysql.')
  else
    console.log('Se inicio conexion.')
})


module.exports = conexion