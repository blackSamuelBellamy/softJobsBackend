const { Pool } = require('pg')

const credentials = {
    host: 'postgresql-blacksam.alwaysdata.net',
    user: 'blacksam',
    port: 5432,
    database: 'blacksam_softjobs',
    password: 'blacksam1234..',
    allowExitOnIdle: true
}

const pool = new Pool(credentials)

module.exports = pool