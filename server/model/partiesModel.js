import {Pool} from "pg"
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

class PartiesModel{
    async selecAParty(idval){
        const query = 'SELECT * FROM parties WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}
const partiesModel = new PartiesModel()
export default partiesModel
