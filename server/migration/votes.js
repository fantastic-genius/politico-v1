import pool from "../config"

pool.on('connect', () => {
    console.log("Connected to the database")
})

const createVotesTable = () => {
    const queryText = `CREATE TABLE IF NOT EXISTS
        votes(
            id SERIAL NOT NULL,
            createdOn DATE NOT NULL DEFAULT CURRENT_DATE,
            createdBy INT NOT NULL,
            office INT NOT NULL,
            candidate INT NOT NULL,
            CONSTRAINT votes_constraint PRIMARY KEY(createdBy, office),
            FOREIGN KEY (createdBy) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (office) REFERENCES offices (id) ON DELETE CASCADE,
            FOREIGN KEY (candidate) REFERENCES candidates (id) ON DELETE CASCADE
            )`

    pool.query(queryText)
        .then(res => {
            console.log(res)
            pool.end()
        })
        .catch(err => {
            console.log(err)
            pool.end()
        })
}

const dropVotesTable = () => {
    const queryText = 'DROP TABLE IF EXISTS votes returning'

    pool.query(queryText)
        .then(res => {
            console.log(res)
            pool.end()
        })
        .catch(err => {
            console.log(err)
            pool.end()
        })
}

pool.on('remove', () => {
    console.log("Client Removed")
    process.exit(0)
})

export {createVotesTable, dropVotesTable}
require('make-runnable')

