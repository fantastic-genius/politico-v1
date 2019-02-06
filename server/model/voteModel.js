import pool from "../config"

class VoteModel{
    async createVote(values){
        const query = `INSERT INTO
                votes(createdOn, createdBy, office, candidate)
                values($1, $2, $3, $4)
                RETURNING *`
        
        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}