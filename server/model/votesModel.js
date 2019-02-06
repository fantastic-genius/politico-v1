import pool from "../config"

class VotesModel{
    async createVote(values){
        const query = `INSERT INTO
                votes(createdby, office, candidate)
                values($1, $2, $3)
                RETURNING *`
        
        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAVote(values){
        const query = 'SELECT * FROM votes WHERE createdby=$1 AND office=$2'

        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

const votesModel = new VotesModel()
export default votesModel 
