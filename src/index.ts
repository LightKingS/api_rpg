import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import './database/connect'
import router from './routes'


const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3001, () => console.log('Server escutando em localhost 3001'))