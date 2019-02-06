import {Pool} from "pg"
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

class CandidatesModel{

    async createCandidate(values){
        const query = `INSERT INTO
                candidates(office, party, candidate)
                values($1, $2, $3)
                RETURNING *`
        try {
            const {rows}  = await pool.query(query, values)
            return rows
        } catch (error) {
            return res.status(500).send({
                status: 500,
                error: "Something went wrong, cannot process your request. Pleae try again"
            })
        }
        
    }
}

const candidatesModel = new CandidatesModel()
export default candidatesModel
