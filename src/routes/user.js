const express = require('express')
const connection = require('../connection')
const router =  express.Router()

router.get('/users', (req, res) => {
    const query = 'select * from user'
    connection.query(query, (err, results) => {
        if (err) throw error
        res.json(results);
    })
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params
    const query = `select u.name, u.lastname from user u where u.id = ${id}`
    connection.query(query, (err, results) => {
        if (err) throw error
        res.json(results);
    })
});

router.post('/users', (req, res) => {
    const { name, lastname, age } = req.body;
    const query = `INSERT INTO user (name, lastname, age) VALUES('${name}', '${lastname}', ${age});`;
    connection.query(query, (err) => {
        if (err) throw error
        res.json({ message: 'user register'});
    })    
});

module.exports = router;

