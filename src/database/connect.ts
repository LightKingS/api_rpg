import { createConnection } from 'typeorm'

createConnection().then(()=> console.log('Conectado com a database'))