import {Pool} from "pg"
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

class OfficesModel{
    async selecAnOffice(idval){
        const query = 'SELECT * FROM offices WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

const officesModel = new OfficesModel()
export default officesModel
