var express = require('express')
var router = express.Router()

var bd = require('./bd')

//Creación de la tabla
router.get('/creartabla', function (req, res, next) {
    bd.query('drop table if exists tiendas', function (error, resultado) {
        if (error) {
            console.log(error)
            return
        }
    })
    bd.query('create table tiendas (' +
        'idTiendas int not null primary key auto_increment, ' +
        'nombre varchar(50) not null, ' +
        'tipo int not null, ' +
        'nombreCalleDireccion varchar(50) not null, ' +
        'numeroCalleDireccion int not null, ' +
        'codigoPostal int not null, ' +
        'poblacion int not null, ' +
        'localidad varchar(50) not null,' +
        'latitud float not null,' +
        'longitud float not null' +
        ')', function (error, resultado) {
            if (error) {
                console.log(error)
                return
            }
    })
    res.render('mensaje', { mensaje: 'La tabla se creo correctamente.' })
})



//Alta de registros
router.get('/incluir', function (req, res, next) {
    res.render('incluirdatos')
})

router.post('/incluir', function (req, res, next) {
    const registro = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        nombreCalleDireccion: req.body.nombreCalleDireccion,
        numeroCalleDireccion: req.body.numeroCalleDireccion,
        codigoPostal: req.body.codigoPostal,
        poblacion: req.body.poblacion,
        localidad: req.body.localidad,
        latitud: req.body.latitud,
        longitud: req.body.longitud
    }
    bd.query('insert into tiendas set ?', registro, function (error, resultado) {
        if (error) {
            console.log(error)
            return
        }
    })
    res.render('mensaje', { mensaje: 'La carga se efectuo correctamente.' })
})


//Listado de registros
router.get('/listado', function (req, res, next) {
    bd.query('select * from tiendas', function (error, filas) {
        if (error) {
            console.log('error en el listado' + error)
            return
        }
        res.render('listarcompleto', { tiendas: filas })
    })
})

//Listado de registros que tengan como calle Castelló
router.get('/SegListado', function (req, res, next) {
    bd.query(`select * from tiendas where nombreCalleDireccion = 'Castello'`, function (error, filas) {
        if (error) {
            console.log('error en el listado' + error)
            return
        }
        res.render('listarcompleto', { tiendas: filas })
    })
})

//Listado de registros que tengan la localidad de Mar del Plata y población 1
router.get('/TerListado', function (req, res, next) {
    bd.query(`select * from tiendas where localidad = 'Mar del Plata' and poblacion = 1`, function (error, filas) {
        if (error) {
            console.log('error en el listado' + error)
            return
        }
        res.render('listarcompleto', { tiendas: filas })
    })
})

//Listado de registros que tengan tipo 1
router.get('/CuarListado', function (req, res, next) {
    bd.query(`select * from tiendas where tipo = 1`, function (error, filas) {
        if (error) {
            console.log('error en el listado' + error)
            return
        }
        res.render('listarcompleto', { tiendas: filas })
    })
})

// Cálculo de la tienda con la mayor latitud
router.get('/MaximaLatitud', function (req, res, next) {
    bd.query('SELECT nombre, latitud FROM tiendas ORDER BY latitud DESC LIMIT 1', function (error, filas) {
        if (error) {
            console.log('error en el listado', error);
            return;
        }

        const tienda = filas[0];

        res.render('mensaje', { mensaje: 'La tienda que se ubica a mayor latitud es ' + tienda.nombre + ', de latitud ' + tienda.latitud });
    });
});

// Cálculo de la tienda con la menor longitud
router.get('/MinimaLongitud', function (req, res, next) {
    bd.query('SELECT nombre, longitud FROM tiendas ORDER BY longitud ASC LIMIT 1', function (error, filas) {
        if (error) {
            console.log('error en el listado', error);
            return;
        }

        const tienda = filas[0];

        res.render('mensaje', { mensaje: 'La tienda que se ubica a menor longitud es ' + tienda.nombre + ', de longitud ' + tienda.longitud });
    });
});

module.exports = router