var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Boceto y Cambalache' });
});
//---------
/* GET agregar info page. */
router.get('/agregar', function(req, res, next) {
  res.render('pages/agregar', { title: 'Agregar Boceto y Cambalache' });
});
/* GET agregar proceso. */
router.post('/agregar_proceso', function(req, res, next) {
  console.log(req.body)
  console.log('Titulo', req.body.titulo)
  console.log('Autor', req.body.autor)
  console.log('Info', req.body.info)

  res.send('Vas bien! Mira la info ');
});
//--------

/* GET contacto page. */
router.get('/contacto', function(req, res, next) {
  res.render('pages/contacto', { title: 'Contacto Boceto y Cambalache!' });
});

/* GET librero page. */
router.get('/librero', function(req, res, next) {
  res.render('pages/librero', { title: 'Librero Boceto y Cambalache!' });
});

/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('pages/nosotros', { title: 'Nosotros Boceto y Cambalache!' });
});

/* GET notas page. */
router.get('/notas', function(req, res, next) {
  res.render('pages/notas', { title: 'Notas Boceto y Cambalache!' });
});

/* GET registro page. */
router.get('/registro', function(req, res, next) {
  res.render('pages/registro', { title: 'Registro Boceto y Cambalache!' });
});
//---------//
/* GET busqueda page. */
router.get('/busqueda', function(req, res, next) {
  res.render('pages/busqueda', { title: '¿Queres buscar algo?' });
});

/* GET busqueda proceso. */
router.get('/busqueda_proceso', function(req, res, next) {
  const termino = req.query.termino;
  console.log('Se bsucó:', termino);
  res.send(termino);
});




module.exports = router;