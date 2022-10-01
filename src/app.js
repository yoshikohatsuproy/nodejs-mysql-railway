import express from 'express'
import {pool} from './database/db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async  (req, res) => {
    const [rows] = await pool.query('select * from users')
    res.send(rows)
})

app.get('/ping',async (req, res) => {
    const [data] = await  pool.query('select 1 + 1 as data')
    console.log(data)
    res.send(data)
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) values ("Jhon")')
    res.json(result)
})

app.listen(PORT)
console.log('Server on port',PORT)