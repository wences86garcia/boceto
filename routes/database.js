var express = require('express');
var router = express.Router();

// Solicitamos nuestras funciones de DB
const libros = require('../api/libros');

//listado libros
router.get('/', async function(req, res, next) {
    const todosLosLibros = await libros.getBooks();

    res.render('pages/mostrarTodos', {
        libros: todosLosLibros
    });
});

/*
    localhost:3000/database/search
    Busqueda
*/
router.get('/search', async (req, res) => {
    const busqueda = await libros.findBookByTitle(req.query.termino);

    res.render('pages/mostrarTodos', {
        libros: busqueda
    });
});

router.get('/agregar', async (req, res) => {
    const autores = await libros.getAuthors();

    res.render('pages/agregar', {
        title: 'Agregar libro nuevo',
        autores
    });
});

router.post('/agregar_proceso', async (req, res) => {
    console.log(req.body);
    const nuevo = await libros.addBook(
        req.body.titulo,
        req.body.info,
        req.body.cover,
        req.body.autor
    );

    console.log(nuevo);
    res.send('todo bien!');
});

//database/test
router.get('/test', async function(req, res, next) {
    const autores = await libros.getAuthors();

    res.send(autores);
});
// http://localhost:3000/database/libro/4
router.get('/libros/:id', async (req, res) => {
    const librito = await libros.getBookById(req.params.id);

   
    console.log('-------- *** --------');
    console.log(librito.autor.nombreCompleto);
    console.log('-------- *** --------');

    
    // envio info de libros
    res.render('pages/librero', {
        titulo: librito.titulo,
        info: librito.info,
        cover:  librito.cover,
        autor:  librito.autor.nombreCompleto
    });
});

module.exports = router;