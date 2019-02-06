import pool from "../config"

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
            console.log(error)
        }
        
    }

    async selectACandidate(idval){
        const query = 'SELECT * FROM candidates WHERE candidate=$1'
        try {
            const {rows}  = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

const candidatesModel = new CandidatesModel()
export default candidatesModel
