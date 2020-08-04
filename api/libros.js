const db = require('../models');
// Hacemos require de los operators para poder hacer búsquedas con WHERE
const { Op } = require('sequelize');

// Función para traer un listado de toooodos los autores
const getAuthors = async () => {
    const autores = await db.autor.findAll()
                        .then(resultados => {
                            return resultados
                        });
    return autores;
}

const getBooks = async () => {
    // { include: db.autor } trae los datos del autor del libro
    const libros = await db.libro.findAll({ include: db.autor })
                        .then(resultados => {
                            return resultados
                        });
    return libros;
}

/* Busca por ID */
const getBookById = async (id) => {
    const infoLibro = await db.libro.findByPk(id, {
            include: db.autor
        })
                        .then(r => {
                            return r;
                        });
    return infoLibro;
}

// findBookByTitle
const findBookByTitle = async (query) => {
    const infoLibro = await db.libro.findAll({
            where: {
                titulo: {
                    [Op.like]: `%${query}%`,
                }
            },
            include: db.autor
        })
                        .then(r => {
                            return r;
                        });
    return infoLibro;
}

const addBook = async (titulo, info, cover, autorId) => {
    const nuevoLibro = await db.libro.create({
        titulo,
        info,
        cover,
        autorId
    });

    return nuevoLibro;
}

module.exports = {
    getAuthors,
    getBookById,
    getBooks,
    findBookByTitle,
    addBook
}